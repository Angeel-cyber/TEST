import React, { useState, useMemo, useEffect } from 'react';
import { engineersData as initialEngineersData } from './constants';
import type { ResumeData } from './types';
import ProfileGrid from './components/ProfileGrid';
import ProfileDetail from './components/ProfileDetail';
import FilterSidebar from './components/FilterSidebar';
import AddProfileModal from './components/AddProfileModal';
import { calculateYearsOfExperience } from './utils';
import Footer from './components/Footer';

const LOCAL_STORAGE_KEY = 'engineerProfiles';

const App: React.FC = () => {
  const [engineers, setEngineers] = useState<ResumeData[]>(() => {
    try {
      const savedEngineers = window.localStorage.getItem(LOCAL_STORAGE_KEY);
      if (savedEngineers) {
        return JSON.parse(savedEngineers);
      }
    } catch (error) {
      console.error("Failed to parse engineers from localStorage", error);
    }
    return initialEngineersData;
  });
  
  const [selectedEngineer, setSelectedEngineer] = useState<ResumeData | null>(null);
  
  // Filter states
  const [nameFilter, setNameFilter] = useState('');
  const [experienceFilter, setExperienceFilter] = useState<number>(0);
  const [skillsFilter, setSkillsFilter] = useState<string[]>([]);
  const [certificationsFilter, setCertificationsFilter] = useState<string[]>([]);
  const [customSkills, setCustomSkills] = useState<string[]>([]);
  const [customCerts, setCustomCerts] = useState<string[]>([]);
  
  // Modal and loading states
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
        setIsLoading(false);
    }, 1500); // Simulate network request
    return () => clearTimeout(timer);
  }, []);

  // Persist engineers to localStorage whenever they change
  useEffect(() => {
    try {
      window.localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(engineers));
    } catch (error) {
      console.error("Failed to save engineers to localStorage", error);
    }
  }, [engineers]);

  const handleSelectEngineer = (engineer: ResumeData) => {
    setSelectedEngineer(engineer);
    window.scrollTo(0, 0);
  };

  const handleGoBack = () => {
    setSelectedEngineer(null);
  };

  const handleAddEngineer = (newEngineer: ResumeData) => {
    setEngineers(prev => [...prev, newEngineer]);
    setIsModalOpen(false);
  };

  const handleDeleteEngineer = (engineerId: string) => {
    if (window.confirm("Êtes-vous sûr de vouloir supprimer ce profil ? Cette action est irréversible.")) {
      setEngineers(prev => prev.filter(eng => eng.id !== engineerId));
      if (selectedEngineer?.id === engineerId) {
        setSelectedEngineer(null);
      }
    }
  };

  const handleAddCustomSkill = (skill: string) => {
    if (skill && !customSkills.includes(skill)) {
      const newSkill = skill.trim();
      setCustomSkills(prev => [...prev, newSkill]);
      setSkillsFilter(prev => [...new Set([...prev, newSkill])]);
    }
  };

  const handleAddCustomCertification = (cert: string) => {
    if (cert && !customCerts.includes(cert)) {
        const newCert = cert.trim();
        setCustomCerts(prev => [...prev, newCert]);
        setCertificationsFilter(prev => [...new Set([...prev, newCert])]);
    }
  };

  const allFilterableSkills = useMemo(() => {
    const skillSet = new Set<string>();
    engineers.forEach(eng => {
      eng.skills.forEach(cat => {
        cat.skills.forEach(skill => {
          if (skill.isKeySkill) {
            skillSet.add(skill.name);
          }
        });
      });
    });
    customSkills.forEach(skill => skillSet.add(skill));
    return Array.from(skillSet).sort();
  }, [engineers, customSkills]);
  
  const allFilterableCertifications = useMemo(() => {
    const certSet = new Set<string>();
    engineers.forEach(eng => {
      eng.certifications.forEach(cert => {
        certSet.add(cert.title);
      });
    });
    customCerts.forEach(cert => certSet.add(cert));
    return Array.from(certSet).sort();
  }, [engineers, customCerts]);

  const filteredEngineers = useMemo(() => {
    return engineers.filter(engineer => {
      // Name filter
      if (nameFilter && !engineer.name.toLowerCase().includes(nameFilter.toLowerCase())) {
        return false;
      }
      // Experience filter
      const yearsOfExperience = calculateYearsOfExperience(engineer.experience);
      if (experienceFilter > 0 && yearsOfExperience < experienceFilter) {
        return false;
      }
      // Skills filter
      if (skillsFilter.length > 0) {
        const engineerSkills = engineer.skills.flatMap(s => s.skills.map(skill => skill.name));
        if (!skillsFilter.every(skill => engineerSkills.includes(skill))) {
          return false;
        }
      }
      // Certifications filter
      if (certificationsFilter.length > 0) {
        const engineerCerts = engineer.certifications.map(c => c.title);
        if (!certificationsFilter.every(cert => engineerCerts.includes(cert))) {
          return false;
        }
      }
      return true;
    });
  }, [engineers, nameFilter, experienceFilter, skillsFilter, certificationsFilter]);

  const resetFilters = () => {
    setNameFilter('');
    setExperienceFilter(0);
    setSkillsFilter([]);
    setCertificationsFilter([]);
    setCustomSkills([]);
    setCustomCerts([]);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-200 text-gray-800 flex flex-col">
      <main className="flex-grow container mx-auto p-4 lg:p-8">
        {selectedEngineer ? (
          <ProfileDetail 
            engineer={selectedEngineer} 
            onBack={handleGoBack} 
            onDelete={handleDeleteEngineer} 
          />
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            <FilterSidebar
              allSkills={allFilterableSkills}
              nameFilter={nameFilter}
              setNameFilter={setNameFilter}
              experienceFilter={experienceFilter}
              setExperienceFilter={setExperienceFilter}
              skillsFilter={skillsFilter}
              setSkillsFilter={setSkillsFilter}
              allCertifications={allFilterableCertifications}
              certificationsFilter={certificationsFilter}
              setCertificationsFilter={setCertificationsFilter}
              onReset={resetFilters}
              onAddCustomSkill={handleAddCustomSkill}
              onAddCustomCertification={handleAddCustomCertification}
            />
            <div className="lg:col-span-3">
              <ProfileGrid
                engineers={filteredEngineers}
                onSelect={handleSelectEngineer}
                onAddProfile={() => setIsModalOpen(true)}
                onDelete={handleDeleteEngineer}
                isLoading={isLoading}
              />
            </div>
          </div>
        )}
        {isModalOpen && (
          <AddProfileModal
            onClose={() => setIsModalOpen(false)}
            onAdd={handleAddEngineer}
          />
        )}
      </main>
      <Footer />
    </div>
  );
};

export default App;
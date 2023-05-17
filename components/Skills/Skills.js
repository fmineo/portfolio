import React, { useState, useEffect } from 'react';
import SkillsSection from "./SkillsSection";
import axios from 'axios';

function Skills() {

    const [skills, setSkills] = useState(null);

    useEffect(() => {
      const fetchSkills = async () => {
        try {
          const response = await axios.get('/my-skills.json');
          setSkills(response.data);
        } catch (error) {
          console.error('Error fetching skills:', error);
        }
      };
  
      fetchSkills();
    }, []);
  
    if (!skills) {
      return <div>Loading skills...</div>;
    }
    
    return (
        <>
            <h3 className="text-center text-3xl md:text-5xl pb-5">
                Le mie competenze
            </h3>
            <div className="grid md:grid-cols-2">
                {Object.keys(skills).map((category, index) => (
                    <SkillsSection
                        key={index}
                        skills={skills}
                        category={category}
                    />
                ))}
            </div>
        </>
    );
}

export default Skills;

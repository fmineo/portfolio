import React from "react";
import Skill from "./Skill";

const SkillsSection = ({ category, skills }) => {
    return (
        <div className="m-3">
            <h4 className="text-center text-lg font-semibold">{category}</h4>
            <ul>
                {skills[category].map((skill, skillIndex) => (
                    <Skill key={skillIndex} skill={skill} />
                ))}
            </ul>
        </div>
    );
};

export default SkillsSection;

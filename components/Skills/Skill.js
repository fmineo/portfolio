import React from "react";

const Skill = ({ skill }) => {
    const currentYear = new Date().getFullYear();
    const yearsOfExperience = currentYear - skill.since;
    return (
        <li className="my-4">
            <strong>{skill.name}</strong>{" "}
            <small className="float-right">Esperienza: {yearsOfExperience} anni</small>
            <div className="h-2 w-full bg-neutral-200 dark:bg-neutral-600 rounded mt-1">
                <div
                    className="h-2 bg-black dark:bg-gray-300 rounded"
                    style={{ width: `${skill.level}%` }}
                ></div>
            </div>
        </li>
    );
};

export default Skill;

// src/pages/Team.js

import React, { useState } from 'react';
import './Team.css';
import ProfileCardComponent from '../components/ProfileCard'
import teamData from '../data/teamData'; // Store data separately for scalability

function Team() {
  const [openTeam, setOpenTeam] = useState(null);

  const handleToggle = (index) => {
    setOpenTeam(openTeam === index ? null : index);
  };

  return (
    <div className="team-container">
      {teamData.map((team, index) => (
        <section key={index} className="team-section">
          <button
            className={`team-heading-toggle${openTeam === index ? ' open' : ''}`}
            onClick={() => handleToggle(index)}
            type="button"
          >
            {team.teamName}
          </button>
          <div className={`team-grid${openTeam === index ? '' : ' closed'}`}>
            {openTeam === index && team.members.map((member, idx) => (
              <ProfileCardComponent
                key={idx}
                name={member.name}
                title={member.role}
                avatarUrl={member.image}
                linkedin={member.linkedin}
                github={member.github}
              />
            ))}
          </div>
        </section>
      ))}
    </div>
  );
}

export default Team;

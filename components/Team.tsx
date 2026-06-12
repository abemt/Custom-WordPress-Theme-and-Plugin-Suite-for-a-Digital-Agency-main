
import React from 'react';
import Section from './ui/Section';
import SectionTitle from './ui/SectionTitle';
import { TEAM_MEMBERS } from '../constants';

const Team: React.FC = () => {
  return (
    <Section id="team" className="bg-slate-800">
      <SectionTitle>Meet Our Experts</SectionTitle>
      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
        {TEAM_MEMBERS.map((member) => (
          <div key={member.name} className="text-center">
            <img
              className="mx-auto h-40 w-40 rounded-full object-cover shadow-lg"
              src={member.imageUrl}
              alt={member.name}
            />
            <h3 className="mt-6 text-base font-semibold leading-7 tracking-tight text-white">{member.name}</h3>
            <p className="text-sm leading-6 text-teal-400">{member.role}</p>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default Team;

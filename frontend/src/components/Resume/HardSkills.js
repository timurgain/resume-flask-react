import React from "react";

function HardSkills({ hardSkills }) {
  React.useMemo(
    () => hardSkills.sort((a, b) => a.order - b.order),
    [hardSkills]
  );

  function getListItems() {
    return hardSkills.map((skill) => {
      return (
        <li key={skill.id} className="hard-skills__item">
          {skill.title}
        </li>
      );
    });
  }

  return (
    <section className="section">
      <h2 className="section__title">Hard skills</h2>
      <ul className="hard-skills">{getListItems()}</ul>
    </section>
  );
}

export default HardSkills;

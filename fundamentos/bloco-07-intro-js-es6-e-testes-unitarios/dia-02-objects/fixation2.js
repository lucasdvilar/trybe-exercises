const student1 = {
  Html: 'Muito Bom',
  Css: 'Bom',
  JavaScript: 'Ótimo',
  SoftSkills: 'Ótimo',
};

const student2 = {
  Html: 'Bom',
  Css: 'Ótimo',
  JavaScript: 'Ruim',
  SoftSkills: 'Ótimo',
  Git: 'Bom', // chave adicionada
};

const showSkills = (student) => {
  const keys = Object.keys(student);
  for (let i = 0; i < keys.length; i += 1) {
    console.log(`${keys[i]}, Nível: ${student[keys[i]]}`);
  }
}

showSkills(student1);
showSkills(student2);
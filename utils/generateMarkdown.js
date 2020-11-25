// function to generate markdown for README
function generateMarkdown(data) {
    return `
# ${data.project}
  
${data.description};
  
## Installation
  

\`\`\`bash
${data.dependencies};
\`\`\`
  
## How to run the test
  
\`\`\`bash
${data.tests};
\`\`\`

  
## Contributing

${data.contributing};


## License

${data.license};


## Repository

Username: ${data.username};
${data.repo};


## Contact

Contact me at ${data.email};
`;
}


module.exports = generateMarkdown;

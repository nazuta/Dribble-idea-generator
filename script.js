document.addEventListener('DOMContentLoaded', function() {
    const strategiesTextarea = document.getElementById('strategies');
    const domainsTextarea = document.getElementById('domains');
    const generateButton = document.getElementById('generate');
    const resultDiv = document.getElementById('result');

    generateButton.addEventListener('click', function() {
        const strategies = strategiesTextarea.value.split('\n').filter(item => item.trim() !== '');
        const domains = domainsTextarea.value.split('\n').filter(item => item.trim() !== '');

        if (strategies.length === 0 || domains.length === 0) {
            resultDiv.textContent = 'Please fill in both fields.';
            return;
        }

        const randomStrategy = strategies[Math.floor(Math.random() * strategies.length)];
        const randomDomain = domains[Math.floor(Math.random() * domains.length)];

        resultDiv.textContent = `Idea: ${randomStrategy} in the ${randomDomain} industry`;
    });
});

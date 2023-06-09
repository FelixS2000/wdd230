// Read the data from data.json
fetch('scripts/data.json')
  .then(response => response.json())
  .then(data => {
    // Get the container element to display the companies
    const companyList = document.getElementById('companyList');

    // Generate HTML for each company
    data.companies.forEach(company => {
      const companyHTML = `
        <div class="company">
          <h2>${company['Company Name']}</h2>
          <p><strong>Address:</strong> ${company.Address}</p>
          <p><strong>Phone Number:</strong> ${company['Phone Number']}</p>
          <p><strong>Website:</strong> <a href="http://${company.Website}" target="_blank">${company.Website}</a></p>
          <p><strong>Membership Level:</strong> ${company['Membership Level']}</p>
          <p><strong>Additional Information:</strong> ${company['Additional Information']}</p>
        </div>
      `;
      // Append the company HTML to the container
      companyList.innerHTML += companyHTML;
    });
  });

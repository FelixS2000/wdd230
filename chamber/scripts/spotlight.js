// JSON data
const data = {
    "companies": [
      {
        "Company Name": "Acme Corporation",
        "Address": "123 Main Street, Santo Domingo",
        "Phone Number": "+1 123-456-7890",
        "Website": "www.acmecorp.com",
        "Image/Icon": "https://www.deinmarktplatz.eu/images/logos/1/acme_vfcz-z1.png",
        "Membership Level": "Bronze Membership",
        "Additional Information": "Acme Corporation specializes in manufacturing industrial machinery."
      },
      {
        "Company Name": "XYZ Tech Solutions",
        "Address": "456 Maple Avenue, Santiago",
        "Phone Number": "+1 987-654-3210",
        "Website": "www.xyztechsolutions.com",
        "Image/Icon": "https://xyzteknoloji.com/wp-content/uploads/2022/03/logo.png",
        "Membership Level": "Silver Membership",
        "Additional Information": "XYZ Tech Solutions provides IT consulting services and software solutions."
      },
      {
        "Company Name": "Tropical Foods",
        "Address": "789 Palm Street, Punta Cana",
        "Phone Number": "+1 246-810-1214",
        "Website": "www.tropicalfoodsdr.com",
        "Image/Icon": "https://img.lovepik.com/free-png/20220101/lovepik-tropical-fruit-png-image_401147673_wh860.png",
        "Membership Level": "Gold Membership",
        "Additional Information": "Tropical Foods is a leading food processing and distribution company."
      },
      {
        "Company Name": "Global Logistics",
        "Address": "987 Ocean Boulevard, Puerto Plata",
        "Phone Number": "+1 567-890-1234",
        "Website": "www.globallogisticsdr.com",
        "Image/Icon": "https://w7.pngwing.com/pngs/687/88/png-transparent-mover-transport-logistic-logistics-cargo-aircraft-global-logistics-freight-transport-service-mode-of-transport.png",
        "Membership Level": "Bronze Membership",
        "Additional Information": "Global Logistics offers comprehensive logistics and supply chain solutions."
      },
      {
        "Company Name": "Sunshine Resorts",
        "Address": "321 Paradise Road, Bavaro",
        "Phone Number": "+1 432-109-8765",
        "Website": "www.sunshineresorts.com",
        "Image/Icon": "https://www.thesunshineresortkokut.com/images/logo-sunshine.png",
        "Membership Level": "Silver Membership",
        "Additional Information": "Sunshine Resorts operates luxury resorts and hotels across the Dominican Republic."
      },
      {
        "Company Name": "Fresh Produce Co.",
        "Address": "654 Orchard Lane, La Romana",
        "Phone Number": "+1 789-012-3456",
        "Website": "www.freshproduceco.com",
        "Image/Icon": "https://w7.pngwing.com/pngs/1004/875/png-transparent-food-vegetable-machine-industry-fresh-produce-natural-foods-food-frozen-dessert.png",
        "Membership Level": "Gold Membership",
        "Additional Information": "Fresh Produce Co. is a supplier of high-quality fresh fruits and vegetables."
      },
      {
        "Company Name": "Tech Innovators",
        "Address": "321 Innovation Avenue, Santo Domingo",
        "Phone Number": "+1 890-567-1234",
        "Website": "www.techinnovatorsdr.com",
        "Image/Icon": "https://w7.pngwing.com/pngs/375/919/png-transparent-computer-icons-innovation-innovative-miscellaneous-text-technology.png",
        "Membership Level": "Bronze Membership",
        "Additional Information": "Tech Innovators develops innovative software solutions for businesses."
      },
      {
        "Company Name": "Caribbean Tours",
        "Address": "987 Palm Beach Road, Punta Cana",
        "Phone Number": "+1 567-123-8901",
        "Website": "www.caribbeantoursdr.com",
        "Image/Icon": "https://caribetours.com.do/wp-content/uploads/2021/04/CARIBE-TOURS-300x167.jpg",
        "Membership Level": "Silver Membership",
        "Additional Information": "Caribbean Tours offers guided tours and travel packages in the Caribbean region."
      },
      {
        "Company Name": "HealthFirst Clinic",
        "Address": "654 Wellness Street, Santiago",
        "Phone Number": "+1 432-987-6543",
        "Website": "www.healthfirstclinicdr.com",
        "Image/Icon": "https://www.logolynx.com/images/logolynx/e4/e4a99703fecf63bd46e37c5ef2c5ce0c.jpeg",
        "Membership Level": "Gold Membership",
        "Additional Information": "HealthFirst Clinic provides comprehensive healthcare services and medical consultations."
      }
    ]
  };
  
  // Get the spotlight sections by their IDs
  const firstSpotlight = document.getElementById('firstSpotlight');
  const secondSpotlight = document.getElementById('secondSpotlight');
  const thirdSpotlight = document.getElementById('thirdSpotlight');
  
  // Filter the companies with silver or gold membership status
  const silverAndGoldMembers = data.companies.filter(company => company['Membership Level'] === 'Silver Membership' || company['Membership Level'] === 'Gold Membership');
  
  // Randomly select two companies from the filtered list
  const selectedCompanies = getRandomCompanies(silverAndGoldMembers, 2);
  
  // Populate the first spotlight with information from the first selected company
  if (selectedCompanies.length >= 1) {
    const firstCompany = selectedCompanies[0];
    populateSpotlight(firstSpotlight, firstCompany);
  }
  
  // Populate the second spotlight with information from the second selected company
  if (selectedCompanies.length >= 2) {
    const secondCompany = selectedCompanies[1];
    populateSpotlight(secondSpotlight, secondCompany);
  }
  
  // Helper function to populate a spotlight section with company information
  function populateSpotlight(spotlight, company) {
    spotlight.innerHTML = `
      <h2>${company['Company Name']}</h2>
      <p>${company['Additional Information']}</p>
      <p>Address: ${company['Address']}</p>
      <p>Phone Number: ${company['Phone Number']}</p>
      <p>Website: <a href="${company['Website']}" target="_blank">${company['Website']}</a></p>
      <img src="${company['Image/Icon']}" alt="${company['Company Name']}">
    `;
  }
  
  // Helper function to randomly select companies from the list
  function getRandomCompanies(companies, count) {
    const shuffled = companies.sort(() => 0.5 - Math.random());
    return shuffled.slice(0, count);
  }
  
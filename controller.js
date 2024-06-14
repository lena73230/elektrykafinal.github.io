const HomePage = ({ language }) => (
    <div className="section" id="home-section">
        <h2>{translations[language].homeTitle}</h2>
        <div className="container">
            <div className="img-cont">
                <img src="https://www.motorcarclassics.com/galleria_images/1184/1184_main_l.jpg" alt="Zdjęcie auta zabytkowego" />
                <p dangerouslySetInnerHTML={{ __html: translations[language].homeContent1 }}></p>
            </div>
            <div className="img-cont">
                <p id="p2">{translations[language].homeContent2}</p>
                <img id="img2" src="https://epompa.pl/pol_pl_Przewod-LGY-1x1mm2-niebieski-8210_1.jpg" alt="Zdjęcie kabla elektrycznego" />
            </div>
        </div>
    </div>
);

const GalleryPage = ({ language }) => {
    const openModal = (event) => {
        const modal = document.getElementById("myModal");
        const modalImg = document.getElementById("img01");
        modal.style.display = "block";
        modalImg.src = event.target.src;
    };

    const closeModal = () => {
        const modal = document.getElementById("myModal");
        modal.style.display = "none";
    };

    return (
        <div className="section">
            <h2>{translations[language].galleryTitle}</h2>
            <div className="container">
                <div className="image-container">
                    <img src="https://rometmotors.pl/uploadfiles/products/0/16966/Wiazka_elektryczna_72717_PREMIUM.jpg" alt="Wiązka 1" onClick={openModal} />
                </div>
                <div className="image-container">
                    <img src="https://sklep.kayomoto.pl/7340-large_default/wiazka-elektryczna-kayo-a300.jpg" alt="Wiązka 2" onClick={openModal} />
                </div>
                <div className="image-container">
                    <img src="https://czesci.zagielauto.pl/userdata/public/gfx/11641.jpg" alt="Wiązka 3" onClick={openModal} />
                </div>
                <div className="image-container">
                    <img src="https://a.assecobs.com/_img/czescimanitou/1f72b21a-90f6-4bcf-ac49-8a7b539924a8/wiazka-elektryczna-silnika-manitou-231242.jpg" alt="Wiązka 4" onClick={openModal} />
                </div>
            </div>
            <div id="myModal" className="image-modal" style={{ display: "none" }}>
                <span className="close" onClick={closeModal}>&times;</span>
                <img className="image-modal-content" id="img01" src="#" alt="#" />
            </div>
        </div>
    );
};

const ContactPage = ({ language }) => (
    <div className="section">
        <h2>{translations[language].contactTitle}</h2>
        <div className="container">
            <form>
                <div>
                    <label htmlFor="name">{translations[language].contactName}</label>
                    <input type="text" id="name" name="name" required />
                </div>
                <div>
                    <label htmlFor="email">{translations[language].contactEmail}</label>
                    <input type="email" id="email" name="email" required />
                </div>
                <div>
                    <label htmlFor="message">{translations[language].contactMessage}</label>
                    <textarea id="message" name="message" rows="4" required></textarea>
                </div>
                <button type="submit">{translations[language].contactSend}</button>
            </form>
            <div className="contact-info">
                <h3>{translations[language].contactAddress}</h3>
                <p>ul. Fikcyjna 123, <br /> 00-000 Warszawa</p>

                <h3>{translations[language].contactPhone}</h3>
                <p>+48 123 456 789</p>

                <h3>{translations[language].contactEmailLabel}</h3>
                <p>kontakt@elektrykazabytkowe.pl</p>
            </div>
        </div>
    </div>
);

const PrivacyPolicyPage = ({ language }) => (
    <div className="section">
        <h2>{translations[language].navPrivacy}</h2>
        <div className="container">
            <ul>
                <li>{translations[language].textPrivacy0}</li>
                <li>{translations[language].textPrivacy1}</li>
                <li>{translations[language].textPrivacy2}</li>
                <li>{translations[language].textPrivacy3}</li>
                <li>{translations[language].textPrivacy4}</li>
                <li>{translations[language].textPrivacy5}</li>
                <li>{translations[language].textPrivacy6}</li>
            </ul>
        </div>
    </div>
);

const renderApp = (language = 'pl') => {
    const path = window.location.hash.substr(1);
    let pageComponent;

    switch (path) {
        case '/':
            pageComponent = <HomePage language={language} />;
            break;
        case '/galeria':
            pageComponent = <GalleryPage language={language} />;
            break;
        case '/kontakt':
            pageComponent = <ContactPage language={language} />;
            break;
        case '/polityka-prywatnosci':
            pageComponent = <PrivacyPolicyPage language={language} />;
            break;
        default:
            pageComponent = <HomePage language={language} />;
            break;
    }

    ReactDOM.render(pageComponent, document.getElementById('app'));

    // Update text content based on language
    document.getElementById('header-title').textContent = translations[language].headerTitle;
    document.getElementById('nav-home').textContent = translations[language].navHome;
    document.getElementById('nav-gallery').textContent = translations[language].navGallery;
    document.getElementById('nav-contact').textContent = translations[language].navContact;
    document.getElementById('nav-privacy').textContent = translations[language].navPrivacy;
    document.getElementById('cookie-message').textContent = translations[language].cookieMessage;
    document.getElementById('accept-cookies').textContent = translations[language].cookieAccept;
    //document.getElementById('cookie-policy-link').textContent = translations[language].cookiePolicy;
};

window.addEventListener('hashchange', () => renderApp(currentLanguage));
let currentLanguage = 'pl';

document.getElementById('lang-toggle').addEventListener('click', () => {
    currentLanguage = currentLanguage === 'pl' ? 'en' : 'pl';
    document.getElementById('lang-toggle').textContent = currentLanguage === 'pl' ? 'English' : 'Polski';
    renderApp(currentLanguage);
});

document.getElementById('accept-cookies').addEventListener('click', () => {
    document.getElementById('cookie-banner').style.display = 'none';
    localStorage.setItem('cookiesAccepted', 'true');
});

if (!localStorage.getItem('cookiesAccepted')) {
    document.getElementById('cookie-banner').style.display = 'block';
}

renderApp();

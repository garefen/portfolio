import { useEffect, useRef, useState } from 'react';
import './Nav.scss';

const Selectors = {
  HERO: '.hero',
  ABOUT: '.about',
  JOBS: '.jobs',
  PRODUCTS: '.products',
  CONTACT: '.contact',
}

const textsToSelectors = [
  {
    SELECTOR: Selectors.HERO,
    TEXT: '',
  },
  {
    SELECTOR: Selectors.ABOUT,
    TEXT: 'Sobre mim',
  },
  {
    SELECTOR: Selectors.JOBS,
    TEXT: 'Experiências',
  },
  {
    SELECTOR: Selectors.PRODUCTS,
    TEXT: 'Serviços',
  },
  {
    SELECTOR: Selectors.CONTACT,
    TEXT: 'Contato',
  },
]

function Nav() {
  const [isMobileNavOpened, setIsMobileNavOpened] = useState(false);
  const [activeSection, setActiveSection] = useState(null); // Seção ativa
  const mobileNavRef = useRef(null);

  useEffect(() => {
    const sections = document.querySelectorAll(Object.values(Selectors));

    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.5,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.className);
        }
      });
    }, observerOptions);

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  const desktopJumpOnClick = (index) => {
    const sectionKeys = Object.keys(Selectors);
    const target = sectionKeys[index];
    const element = document.querySelector(Selectors[target]);

    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const closeMobileNav = () => {
    mobileNavRef.current.classList.remove('nav__mobile--opened');
    setIsMobileNavOpened(false);
  }
  
  const openMobileNav = () => {
    mobileNavRef.current.classList.add('nav__mobile--opened');
    setIsMobileNavOpened(true);
  }

  const toggleMobileNav = () => {
    isMobileNavOpened ? closeMobileNav() : openMobileNav();
  }

  const mobileJumpOnClick = (index) => {
    closeMobileNav();
    desktopJumpOnClick(index);
  }

  return (
    <div className="nav">
      <div className="nav__hamburguer" onClick={() => toggleMobileNav()}>
        <svg width="50px" height="50px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path d="M5 6.5H19V8H5V6.5Z" fill="#1F2328"/>
          <path d="M5 16.5H19V18H5V16.5Z" fill="#1F2328"/>
          <path d="M5 11.5H19V13H5V11.5Z" fill="#1F2328"/>
        </svg>
      </div>
      <div className="nav__logo nav__logo--mobile" onClick={() => mobileJumpOnClick(0)}>
        <svg width="25" height="40" viewBox="0 0 15 17" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0.574219 5.23438C0.574219 4.53906 0.707031 3.88672 0.972656 3.27734C1.23828 2.66797 1.59766 2.13672 2.05078 1.68359C2.51172 1.22266 3.04688 0.859375 3.65625 0.59375C4.26562 0.328125 4.91797 0.195312 5.61328 0.195312H13.3242V3.55859H5.61328C5.37891 3.55859 5.16016 3.60156 4.95703 3.6875C4.75391 3.77344 4.57422 3.89453 4.41797 4.05078C4.26953 4.19922 4.15234 4.375 4.06641 4.57812C3.98047 4.78125 3.9375 5 3.9375 5.23438C3.9375 5.46875 3.98047 5.69141 4.06641 5.90234C4.15234 6.10547 4.26953 6.28516 4.41797 6.44141C4.57422 6.58984 4.75391 6.70703 4.95703 6.79297C5.16016 6.87891 5.37891 6.92188 5.61328 6.92188H8.97656C9.67188 6.92188 10.3242 7.05469 10.9336 7.32031C11.5508 7.57812 12.0859 7.9375 12.5391 8.39844C13 8.85156 13.3594 9.38672 13.6172 10.0039C13.8828 10.6133 14.0156 11.2656 14.0156 11.9609C14.0156 12.6562 13.8828 13.3086 13.6172 13.918C13.3594 14.5273 13 15.0625 12.5391 15.5234C12.0859 15.9766 11.5508 16.3359 10.9336 16.6016C10.3242 16.8672 9.67188 17 8.97656 17H1.51172V13.6367H8.97656C9.21094 13.6367 9.42969 13.5938 9.63281 13.5078C9.83594 13.4219 10.0117 13.3047 10.1602 13.1562C10.3164 13 10.4375 12.8203 10.5234 12.6172C10.6094 12.4141 10.6523 12.1953 10.6523 11.9609C10.6523 11.7266 10.6094 11.5078 10.5234 11.3047C10.4375 11.1016 10.3164 10.9258 10.1602 10.7773C10.0117 10.6211 9.83594 10.5 9.63281 10.4141C9.42969 10.3281 9.21094 10.2852 8.97656 10.2852H5.61328C4.91797 10.2852 4.26562 10.1523 3.65625 9.88672C3.04688 9.62109 2.51172 9.26172 2.05078 8.80859C1.59766 8.34766 1.23828 7.8125 0.972656 7.20312C0.707031 6.58594 0.574219 5.92969 0.574219 5.23438Z" fill="#E55381"/>
        </svg>
      </div>
      <div className="nav__mobile" ref={mobileNavRef}>
        <div className="nav__links nav__links--mobile">
          {textsToSelectors.map((value, index) => 
            value.TEXT ? (
              <div key={index} className={`nav__item nav__item--mobile `} onClick={() => mobileJumpOnClick(index)}>
                {value.TEXT}
              </div>
            ) : '')}
          {/* <div onClick={() => mobileJumpOnClick(3)} className="nav__item nav__item--mobile">Serviços</div> */}
        </div>
      </div>
      <div className="nav__wrapper">
        <div className="nav__logo nav__logo--desktop" onClick={() => desktopJumpOnClick(0)}>
          <svg width="30" height="60" viewBox="0 0 15 17" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0.574219 5.23438C0.574219 4.53906 0.707031 3.88672 0.972656 3.27734C1.23828 2.66797 1.59766 2.13672 2.05078 1.68359C2.51172 1.22266 3.04688 0.859375 3.65625 0.59375C4.26562 0.328125 4.91797 0.195312 5.61328 0.195312H13.3242V3.55859H5.61328C5.37891 3.55859 5.16016 3.60156 4.95703 3.6875C4.75391 3.77344 4.57422 3.89453 4.41797 4.05078C4.26953 4.19922 4.15234 4.375 4.06641 4.57812C3.98047 4.78125 3.9375 5 3.9375 5.23438C3.9375 5.46875 3.98047 5.69141 4.06641 5.90234C4.15234 6.10547 4.26953 6.28516 4.41797 6.44141C4.57422 6.58984 4.75391 6.70703 4.95703 6.79297C5.16016 6.87891 5.37891 6.92188 5.61328 6.92188H8.97656C9.67188 6.92188 10.3242 7.05469 10.9336 7.32031C11.5508 7.57812 12.0859 7.9375 12.5391 8.39844C13 8.85156 13.3594 9.38672 13.6172 10.0039C13.8828 10.6133 14.0156 11.2656 14.0156 11.9609C14.0156 12.6562 13.8828 13.3086 13.6172 13.918C13.3594 14.5273 13 15.0625 12.5391 15.5234C12.0859 15.9766 11.5508 16.3359 10.9336 16.6016C10.3242 16.8672 9.67188 17 8.97656 17H1.51172V13.6367H8.97656C9.21094 13.6367 9.42969 13.5938 9.63281 13.5078C9.83594 13.4219 10.0117 13.3047 10.1602 13.1562C10.3164 13 10.4375 12.8203 10.5234 12.6172C10.6094 12.4141 10.6523 12.1953 10.6523 11.9609C10.6523 11.7266 10.6094 11.5078 10.5234 11.3047C10.4375 11.1016 10.3164 10.9258 10.1602 10.7773C10.0117 10.6211 9.83594 10.5 9.63281 10.4141C9.42969 10.3281 9.21094 10.2852 8.97656 10.2852H5.61328C4.91797 10.2852 4.26562 10.1523 3.65625 9.88672C3.04688 9.62109 2.51172 9.26172 2.05078 8.80859C1.59766 8.34766 1.23828 7.8125 0.972656 7.20312C0.707031 6.58594 0.574219 5.92969 0.574219 5.23438Z" fill="#E55381"/>
          </svg>
        </div>
        <div className="nav__links nav__links--desktop">
          {textsToSelectors.map((value, index) => 
            value.TEXT ? (
              <div key={index} className={`nav__item nav__item--desktop ${activeSection?.includes(Object.values(Selectors)[index].slice(1)) ? 'nav__item--active' : ''}`} onClick={() => desktopJumpOnClick(index)} >
                {/* activeSection?.includes(Object.values(Selectors)[index + 1].slice(1)) ? 'nav__item--active' : '' */}
                {value.TEXT}
              </div>
            ) : '')}
        </div>
      </div>
    </div>
  );
}

export default Nav;

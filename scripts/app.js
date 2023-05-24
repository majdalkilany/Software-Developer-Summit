/* eslint-disable no-plusplus */
const Speakers = [
  {
    name: 'Majd Alkilany',
    major: 'Software developer  Microverse',
    details: 'With deep expertise, the seasoned developer .',
    ImagePath: '../assets/majd.jpg',
  },
  {
    name: 'Majd Alkilany',
    major: 'Software developer  Microverse',
    details: 'With deep expertise, the seasoned developer .',
    ImagePath: '../assets/majd.jpg',
  },
  {
    name: 'Majd Alkilany',
    major: 'Software developer  Microverse',
    details: 'With deep expertise, the seasoned developer .',
    ImagePath: '../assets/majd.jpg',
  },
  {
    name: 'Majd Alkilany',
    major: 'Software developer  Microverse',
    details: 'With deep expertise, the seasoned developer .',
    ImagePath: '../assets/majd.jpg',
  },
  {
    name: 'Majd Alkilany',
    major: 'Software developer  Microverse',
    details: 'With deep expertise, the seasoned developer .',
    ImagePath: '../assets/majd.jpg',
  },
  {
    name: 'Majd Alkilany',
    major: 'Software developer  Microverse',
    details: 'With deep expertise, the seasoned developer .',
    ImagePath: '../assets/majd.jpg',
  },
];
const renderFeaturedSection = () => {
  const featuredDiv = document.getElementById('featured-speaker-header');
  const featuredSection = document.getElementById('featured-speaker-sec');
  const featuredHeader = document.createElement('h3');
  featuredHeader.classList = 'header-sec';
  featuredHeader.textContent = 'Featured Speakers';
  featuredDiv.appendChild(featuredHeader);
  const featuredHr = document.createElement('hr');
  featuredHr.classList = 'hr';
  featuredDiv.appendChild(featuredHr);
  // speakers Logec -===============================================
  // speaker image container
  for (let i = 0; i < Speakers.length; i++) {
    const speakerDiv = document.createElement('div');
    speakerDiv.classList.add('speaker-container');
    featuredSection.appendChild(speakerDiv);
    if (i >= 2) {
      speakerDiv.classList.add('speakersToHide');
      console.log(window.innerWidth);
      if (window.innerWidth < 760) {
        speakerDiv.classList.add('active');
      }
    }
    const speakerImgContainer = document.createElement('div');
    speakerImgContainer.classList = 'speaker-img-container';
    speakerDiv.appendChild(speakerImgContainer);
    // speaker image
    const speakerImg = document.createElement('img');
    speakerImg.classList = 'speaker-img';
    speakerImg.src = Speakers[i].ImagePath;
    speakerDiv.appendChild(speakerImg);
    // speaker info div
    const speakerInfo = document.createElement('div');
    speakerInfo.classList = 'speaker-info';
    speakerDiv.appendChild(speakerInfo);
    const speakerName = document.createElement('h6');
    speakerName.classList = 'speaker-name';
    speakerName.textContent = Speakers[i].name;
    speakerInfo.appendChild(speakerName);
    const speakerSpan = document.createElement('span');
    speakerSpan.classList = 'speaker-span';
    speakerSpan.textContent = Speakers[i].major;
    speakerInfo.appendChild(speakerSpan);
    const speakerHr = document.createElement('hr');
    speakerHr.classList = 'speaker-hr';
    speakerSpan.appendChild(speakerHr);
    const speakerParagraph = document.createElement('p');
    speakerParagraph.classList = 'speaker-par';
    speakerParagraph.textContent = Speakers[i].details;
    speakerInfo.appendChild(speakerParagraph);
  }
  const button = document.createElement('button');
  button.classList = 'featured-button';
  button.innerHTML = ' <p>MORE  <i class="arrow down"> </i></p>';
  featuredSection.appendChild(button);
  // eslint-disable-next-line no-use-before-define
  button.addEventListener('click', toggleClass);
};
function toggleClass() {
  const speakersToHide = document.querySelectorAll('.speakersToHide');
  speakersToHide.forEach((div) => {
    div.classList.toggle('active');
  });
}
renderFeaturedSection();

/* shared-layout.js — injects nav + footer on every page */
(function () {
  const currentPage = location.pathname.split('/').pop() || 'index.html';

  const pages = [
    { href: 'index.html',        label: 'Home' },
    { href: 'research.html',     label: 'Research Areas' },
    { href: 'team.html',         label: 'Our Team' },
    { href: 'publications.html', label: 'Publications' },
    { href: 'projects.html',     label: 'Projects' },
    { href: 'news.html',         label: 'News & Events' },
  ];

  const navLinks = pages.map(p =>
    `<li><a href="${p.href}" class="${currentPage === p.href ? 'active' : ''}">${p.label}</a></li>`
  ).join('');

  const nav = `
  <nav class="site-nav">
    <a href="index.html" class="nav-logo">ALI <span>Research</span> Group</a>
    <ul class="nav-menu">${navLinks}</ul>
  </nav>`;

  const footer = `
  <footer class="site-footer">
    <div class="footer-grid">
      <div class="footer-brand">
        <div class="nav-logo">ALI <span style="color:var(--gold)">Research</span> Group</div>
        <p>Advancing computational chemistry, medicinal chemistry, and machine learning for next-generation molecular design. Based at the University of Strathclyde &amp; GSK, UK.</p>
      </div>
      <div class="footer-col">
        <h4>Navigate</h4>
        <ul>
          <li><a href="index.html">Home</a></li>
          <li><a href="research.html">Research Areas</a></li>
          <li><a href="team.html">Our Team</a></li>
          <li><a href="publications.html">Publications</a></li>
          <li><a href="projects.html">Projects</a></li>
          <li><a href="news.html">News &amp; Events</a></li>
        </ul>
      </div>
      <div class="footer-col">
        <h4>Connect</h4>
        <ul>
          <li><a href="https://twitter.com/HafizSaqibAl1" target="_blank">Twitter / X</a></li>
          <li><a href="https://github.com/HafizSaqibAli/" target="_blank">GitHub</a></li>
          <li><a href="https://www.linkedin.com/in/dr-h-saqib-ali-02a324123/" target="_blank">LinkedIn</a></li>
          <li><a href="https://scholar.google.com/citations?user=qEVrdecAAAAJ&hl=en" target="_blank">Google Scholar</a></li>
        </ul>
      </div>
      <div class="footer-col">
        <h4>Contact</h4>
        <ul>
          <li><a href="mailto:h.saqib78@gmail.com">h.saqib78@gmail.com</a></li>
          <li><a href="https://www.strath.ac.uk" target="_blank">The University of Liverpool</a></li>
          <li><a href="https://www.gsk.com" target="_blank">Liverpool, United Kingdom</a></li>
        </ul>
      </div>
    </div>
    <div class="footer-bottom">
      &copy; ${new Date().getFullYear()} ALI Research Group &nbsp;·&nbsp; The University of Liverpool
    </div>
  </footer>`;

  document.body.insertAdjacentHTML('afterbegin', nav);
  document.body.insertAdjacentHTML('beforeend', footer);
})();

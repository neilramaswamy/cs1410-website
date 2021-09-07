function _createStaffCard(staffObject) {
  let { name, login, pronouns, favorite, profile, fun } = staffObject;

  // Formatting and setting defaults
  if (!pronouns) { pronouns = ''; }
  pronouns = pronouns.toLowerCase();
  if (!favorite) { favorite = '???'; }

  const defaultImage = 'staff_images/default.jpg';
  const imagePath = profile ? `staff_images/portrait/${profile}` : defaultImage;
  const funImagePath = fun ? `staff_images/fun/${fun}` : defaultImage;
  return (`
    <div class="staff" id=${login}>
      <img
        src="${imagePath}"
        class="staff-pic"
        onmouseover="this.src='${funImagePath}'"
        onmouseout="this.src='${imagePath}'"
        alt="Profile picture of ${name}" />
      <div class="staff-text">
        <p><strong>${name}</strong> (${login}) </p>
        <p>${pronouns} </p>
        <p><strong>Favorite use of Computer Vision:</strong> ${favorite} </p>
      </div>
    </div>
  `);
}

async function renderStaffCards() {
  const instructors = ['ssrinath'];
  const htas = ['mroy6', 'tba', 'tba'];
  const stas = ['tba', 'tba'];

  // fetch csv of staff data and parse into array of staff objects
  const csv = await fetch('./staff.csv').then(x => x.text());
  const table = csv.split('\n').map(row => row.trim().split(','));
  const header = table[0];
  const staff = table.slice(1).map(row => {
    const rowObject = {};
    row.forEach((cell, index) => rowObject[header[index]] = cell);
    return rowObject;
  });

  // sort staff alphabetically by name
  staff.sort((a, b) =>  a.name < b.name ? -1 : 1 );

  // create and add staff 'cards' to the appropriate section of webpage
  staff.forEach(s => {
    let containerSelector;
    if (instructors.includes(s.login)) {
      containerSelector = '#instructors-container';
    } else if (htas.includes(s.login)) {
      containerSelector = '#htas-container';
    } else if (stas.includes(s.login)) {
      containerSelector = '#stas-container';
    } else {
      containerSelector = '#tas-container';
    }
    document.querySelector(containerSelector).innerHTML += _createStaffCard(s);
  });
};

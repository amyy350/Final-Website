document.querySelectorAll('.img-hover-wrapper').forEach(wrapper => {
  const caption = wrapper.querySelector('.img-caption');

  wrapper.addEventListener('mousemove', e => {
    const rect = wrapper.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const offsetX = 10;
    const offsetY = 10;

    caption.style.left = (x + offsetX) + 'px';
    caption.style.top = (y + offsetY) + 'px';
    caption.style.opacity = 1;
  });

  wrapper.addEventListener('mouseleave', () => {
    caption.style.opacity = 0;
  });
});

const API_KEY = '123';
const BASE_URL = `https://www.theaudiodb.com/api/v1/json/${API_KEY}`;

document.getElementById('fetchBtn').addEventListener('click', async () => {
  const artistName = document.getElementById('artistName').value.trim();
  const output = document.getElementById('output');

  if (!artistName) {
    output.textContent = 'Please enter an artist name.';
    return;
  }

  const url = `${BASE_URL}/search.php?s=${encodeURIComponent(artistName)}`;
  output.textContent = 'Fetching…';

  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error('HTTP error ' + response.status);
    }

    const data = await response.json();

    if (data.artists && data.artists.length > 0) {
      const artist = data.artists[0];
      output.textContent = `
Artist: ${artist.strArtist}
Debut Year: ${artist.intFormedYear}
Genre: ${artist.strGenre}
Biography (EN):
${artist.strBiographyEN}
      `;
    } else {
      output.textContent = 'No artist found.';
    }
  } catch (err) {
    output.textContent = 'Error: ' + err.message;
  }
});
const fetchBtn = document.getElementById('fetchBtn');
const artistButtons = document.getElementById('artistButtons');
const output = document.getElementById('output');

fetchBtn.addEventListener('click', () => {
    output.textContent = "Please enter an artist's name.";
    artistButtons.classList.add('shrink');
});

document.addEventListener('DOMContentLoaded', () => {
    const popSoundDiv = document.getElementById('popSound'); 
    const popClip = document.getElementById('popClip');     

    popSoundDiv.addEventListener('click', () => {
        popClip.currentTime = 0;
        popClip.play();
    });
    popSoundDiv.addEventListener('dblclick', () => {
    popClip.pause();
});
});

document.addEventListener('DOMContentLoaded', () => {
    const rockSoundDiv = document.getElementById('rockSound'); 
    const rockClip = document.getElementById('rockClip');     

    rockSoundDiv.addEventListener('click', () => {
        rockClip.currentTime = 0;
        rockClip.play();
    });
    rockSoundDiv.addEventListener('dblclick', () => {
    rockClip.pause();
});
});


document.addEventListener('DOMContentLoaded', () => {
    const hipSoundDiv = document.getElementById('hipSound'); 
    const hipClip = document.getElementById('hipClip');     

    hipSoundDiv.addEventListener('click', () => {
        hipClip.currentTime = 0;
        hipClip.play();
    });
    hipSoundDiv.addEventListener('dblclick', () => {
    hipClip.pause();
});
});

document.addEventListener('DOMContentLoaded', () => {
    const rbSoundDiv = document.getElementById('rbSound'); 
    const rbClip = document.getElementById('rbClip');     

    rbSoundDiv.addEventListener('click', () => {
        rbClip.currentTime = 0;
        rbClip.play();
    });
    rbSoundDiv.addEventListener('dblclick', () => {
    rbClip.pause();
});
});

document.addEventListener('DOMContentLoaded', () => {
    const folkSoundDiv = document.getElementById('folkSound'); 
    const folkClip = document.getElementById('folkClip');     

    folkSoundDiv.addEventListener('click', () => {
        folkClip.currentTime = 0;
        folkClip.play();
    });
    folkSoundDiv.addEventListener('dblclick', () => {
    folkClip.pause();
});
});

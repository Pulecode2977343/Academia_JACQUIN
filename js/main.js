// Frecuencias de las notas
		const notes = {
			'C': 261.63,
			'C#': 277.18,
			'D': 293.66,
			'D#': 311.13,
			'E': 329.63,
			'F': 349.23,
			'F#': 369.99,
			'G': 392.00,
			'G#': 415.30,
			'A': 440.00,
			'A#': 466.16,
			'B': 493.88
		};

        // Inicializar contexto de audio
		const AudioContext = window.AudioContext || window.webkitAudioContext;
		const audioCtx = new AudioContext();

		function playNote(note) {
			const osc = audioCtx.createOscillator();
			osc.type = 'sine';
			osc.frequency.value = notes[note];
			const gain = audioCtx.createGain();
			gain.gain.value = 0.008;
			osc.connect(gain);
			gain.connect(audioCtx.destination);
			osc.start();
			setTimeout(() => {
				osc.stop();
			}, 350);
		}

        // Evento para reproducir sonido al pasar el mouse
		document.querySelectorAll('.key').forEach(key => {
			key.addEventListener('mouseenter', e => {
				const note = key.getAttribute('data-note');
				playNote(note);
			});
		});
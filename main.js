// main.js: shared simple interactions for index + down pages
document.addEventListener('DOMContentLoaded', function(){
	var logo = document.getElementById('logo');
	var actions = document.getElementById('actions');
	if(logo && actions){
		logo.addEventListener('click', function(){
			actions.scrollIntoView({behavior:'smooth',block:'center'});
		});
	}

	var dl = document.getElementById('download-btn');
	if(dl){
		dl.addEventListener('click', function(e){
			setTimeout(function(){
				var hint = document.getElementById('dl-hint');
				if(hint) hint.classList.add('show');
			}, 600);
		});
	}

	// BOOXIN LAUNCHER 挖石动画
	var launcher = document.getElementById('booxin-launcher-btn');
	var modal = document.getElementById('dig-modal');
	var scene = document.getElementById('dig-scene');
	if(launcher && modal && scene){
		launcher.addEventListener('click', function(e){
			e.preventDefault();
			modal.classList.add('show');
			// small delay to trigger CSS animations
			setTimeout(function(){ scene.classList.add('play'); }, 60);
			// after a few hits, mark done
			setTimeout(function(){ scene.classList.add('done'); }, 1200);
			// then close and navigate
			setTimeout(function(){
				modal.classList.remove('show');
				scene.classList.remove('play','done');
				window.location.href = launcher.href;
			}, 1650);
		});

		// allow clicking outside to cancel / proceed
		modal.addEventListener('click', function(e){
			if(e.target === modal){
				modal.classList.remove('show');
				scene.classList.remove('play','done');
				// proceed to the page
				window.location.href = launcher.href;
			}
		});

		document.addEventListener('keydown', function(e){
			if(e.key === 'Escape' && modal.classList.contains('show')){
				modal.classList.remove('show');
				scene.classList.remove('play','done');
			}
		});
	}

});

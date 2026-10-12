// Turns each skill that a role or a package lists into a filter: pressing it
// dims everything that did not use that technology and marks where it was used.
(function () {
  var jobs = Array.prototype.slice.call(document.querySelectorAll('.job'));
  var packages = Array.prototype.slice.call(document.querySelectorAll('.pkg'));
  var hint = document.querySelector('[data-filter-hint]');
  var status = document.querySelector('[data-filter-status]');
  var section = document.getElementById('experiencia');
  if (!jobs.length || !status || !section) return;

  var text = status.querySelector('[data-filter-text]');
  var clear = status.querySelector('[data-filter-clear]');
  var restText = 'Mostrando los ' + jobs.length + ' roles.';
  var current = null;
  var pressed = null;
  var buttons = [];

  function techOf(entry) {
    return Array.prototype.map.call(entry.querySelectorAll('.tech-tags [data-tech]'), function (item) {
      return item.dataset.tech;
    });
  }

  var used = {};
  jobs.concat(packages).forEach(function (entry) {
    techOf(entry).forEach(function (tech) { used[tech] = true; });
  });

  document.querySelectorAll('span.chip[data-tech]').forEach(function (chip) {
    if (!used[chip.dataset.tech]) {
      chip.classList.add('chip--static');
      return;
    }
    var button = document.createElement('button');
    button.type = 'button';
    button.className = 'chip';
    button.dataset.tech = chip.dataset.tech;
    button.textContent = chip.textContent;
    button.setAttribute('aria-pressed', 'false');
    chip.replaceWith(button);
    buttons.push(button);
  });

  // Marks one list of entries and returns the ones that match.
  function mark(entries, tech) {
    return entries.filter(function (entry) {
      var hit = !tech || techOf(entry).indexOf(tech) !== -1;
      entry.classList.toggle('is-dim', !hit);
      entry.querySelectorAll('.tech-tags [data-tech]').forEach(function (item) {
        item.classList.toggle('is-hit', Boolean(tech) && item.dataset.tech === tech);
      });
      return hit;
    });
  }

  function plural(count, one, many) {
    return count + ' ' + (count === 1 ? one : many);
  }

  function apply(tech, label) {
    current = tech;
    buttons.forEach(function (button) {
      button.setAttribute('aria-pressed', String(button.dataset.tech === tech));
    });
    var jobHits = mark(jobs, tech);
    var packageHits = mark(packages, tech);
    clear.hidden = !tech;
    if (!tech) {
      text.textContent = restText;
      return null;
    }
    var parts = [];
    if (jobHits.length) parts.push(jobHits.length + ' de ' + plural(jobs.length, 'rol', 'roles'));
    if (packageHits.length) parts.push(plural(packageHits.length, 'paquete', 'paquetes'));
    text.textContent = label + ': ' + parts.join(' y ') + '.';
    return jobHits.length ? section : packageHits[0];
  }

  function reveal(target) {
    var calm = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    target.focus({ preventScroll: true });
    target.scrollIntoView({ behavior: calm ? 'auto' : 'smooth', block: 'start' });
  }

  buttons.forEach(function (button) {
    button.addEventListener('click', function () {
      var tech = button.dataset.tech;
      pressed = button;
      var target = apply(current === tech ? null : tech, button.textContent);
      if (target) reveal(target);
    });
  });

  clear.addEventListener('click', function () {
    apply(null);
    // The button hides itself, so hand focus back to where the filter was set.
    if (pressed) pressed.focus();
  });

  if (buttons.length) {
    hint.hidden = false;
    status.hidden = false;
    apply(null);
  }
})();

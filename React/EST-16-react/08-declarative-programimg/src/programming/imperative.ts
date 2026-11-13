
const container = document.getElementById('imperative-programming')!;

const checkbox = container?.querySelector(
  'input[type="checkbox"]'
) as HTMLInputElement;

const button = container.querySelector('button') as HTMLButtonElement;

function handleChange() {
  console.log('changed');
}

checkbox?.addEventListener('change', handleChange);

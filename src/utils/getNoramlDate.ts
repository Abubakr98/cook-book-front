const options = {
  year: 'numeric',
  month: 'long',
  day: 'numeric',
  hour: 'numeric',
  minute: 'numeric',
};

export const getDate = (date: Date) => {
  const d = new Date(date);
  return d.toLocaleDateString('ru-Ru', options);
};

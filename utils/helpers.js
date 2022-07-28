export const getAuthToken = () => {
  return localStorage.getItem('token');
};

export const setAuthToken = (token) => {
  localStorage.setItem('token', token);
};

export const formatPrice = (number) => {
  return new Intl.NumberFormat('en-NG', {
    style: 'currency',
    currency: 'USD',
  }).format(number / 100);
};

export function formatTime(timeToFormat) {
  return `${
    new Date(timeToFormat).getHours() > 12
      ? new Date(timeToFormat).getHours() - 12
      : new Date(timeToFormat).getHours()
  }:${
    new Date(timeToFormat).getMinutes() > 9
      ? new Date(timeToFormat).getMinutes()
      : new Date(timeToFormat).getMinutes() + '0'
  }${new Date(timeToFormat).getHours() > 12 ? 'pm' : 'am'}`;
}

export function newFormatTime(timeToFormat) {
  const dateObj = new Date(timeToFormat);
  return dateObj
    .toLocaleTimeString('en-gb', {
      hour: '2-digit',
      minute: '2-digit',
      hour12: true,
    })
    .toUpperCase();
}

export function mergeDateTime(date, time) {
  const mergedDateObj = new Date(
    date?.slice(0, 4),
    date?.slice(5, 7) - 1,
    date?.slice(8),
    time?.slice(0, 2),
    time?.slice(3),
    0
  );
  return mergedDateObj.toISOString();
}

export function formatDate(dateToFormat) {
  return `${new Date(dateToFormat).getDate()} ${
    months[new Date(dateToFormat).getMonth()]
  }, ${new Date(dateToFormat).getFullYear()}`;
}

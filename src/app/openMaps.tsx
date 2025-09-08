"use client";
export const OpenMapsText = () => {
  return (
    <button onClick={openMaps} className="cursor-pointer">
      <div className="flex items-center font-semibold">
      <svg className="h-6 w-6.5 fill-current m-1" viewBox="0 0 24 24">
        <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
      </svg>
      Granhøjvej 8, 8600 Silkeborg
      </div>
    </button>
  );
};

export const OpenMapsIcon = () => {
  return (
    <button onClick={openMaps} className="cursor-pointer text-gray-300 hover:text-white transition-colors" aria-label="Open in Maps">
      <svg className="h-7 w-6.5 fill-current -m-1" viewBox="0 0 24 24">
        <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
      </svg>
    </button>
  );
};

const openMaps = () => {
  const address = "Granhøjvej 8, 8600 Silkeborg";
  const encoded = encodeURIComponent(address);
  const userAgent = typeof navigator !== "undefined" ? navigator.userAgent : "";

  if (/iPad|iPhone|iPod/.test(userAgent)) {
    window.location.href = `maps://maps.apple.com/?q=${encoded}`;
  } else if (/android/i.test(userAgent)) {
    window.location.href = `geo:0,0?q=${encoded}`;
  } else {
    window.open(`https://maps.google.com/maps?q=${encoded}`, '_blank');
  }
};
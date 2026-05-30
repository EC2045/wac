function updateClock() {
    const now = new Date();
    const year = now.getFullYear() + 19; // 2045年へのオフセット（2026+19）
    const dateStr = `${year}.${String(now.getMonth() + 1).padStart(2, '0')}.${String(now.getDate()).padStart(2, '0')}`;
    const timeStr = now.toLocaleTimeString('ja-JP', { hour12: false });
    document.getElementById('system-clock').innerText = `東暦${dateStr} ${timeStr}`;
}
setInterval(updateClock, 1000);
updateClock();

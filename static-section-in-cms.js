const a=document.querySelector("[data-section-id]").getAttribute("data-section-id"),b=`https://${window.location.hostname}/section-targets`;fetch(b).then((t=>t.text())).then((t=>{const e=(new DOMParser).parseFromString(t,"text/html").querySelector(`[data-section-id="${a}"]`);e&&document.body.appendChild(e)})).catch((t=>{}));

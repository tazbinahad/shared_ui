import { jsx as _jsx } from "react/jsx-runtime";
import "~/assets/style/RippleWrapper.scss"; // Import SASS file
export var RippleWrapper = function (_a) {
    var children = _a.children;
    var createRipple = function (event) {
        var container = event.currentTarget;
        var ripple = document.createElement("span");
        var rect = container.getBoundingClientRect();
        var size = Math.max(rect.width, rect.height);
        var x = event.clientX - rect.left - size / 2;
        var y = event.clientY - rect.top - size / 2;
        ripple.style.width = ripple.style.height = "".concat(size, "px");
        ripple.style.left = "".concat(x, "px");
        ripple.style.top = "".concat(y, "px");
        ripple.classList.add("ripple");
        container.appendChild(ripple);
        setTimeout(function () {
            ripple.remove();
        }, 600);
    };
    return (_jsx("div", { className: "ripple-wrapper", onClick: createRipple, children: children }));
};

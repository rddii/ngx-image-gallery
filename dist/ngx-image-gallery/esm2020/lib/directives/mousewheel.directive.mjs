import { Directive, Output, HostListener, EventEmitter } from '@angular/core';
import * as i0 from "@angular/core";
export class MouseWheelDirective {
    constructor() {
        this.mouseWheelUp = new EventEmitter();
        this.mouseWheelDown = new EventEmitter();
    }
    onMouseWheelChrome(event) {
        this.mouseWheelFunc(event);
    }
    onMouseWheelFirefox(event) {
        this.mouseWheelFunc(event);
    }
    onMouseWheelIE(event) {
        this.mouseWheelFunc(event);
    }
    mouseWheelFunc(event) {
        var event = window.event || event; // old IE support
        var delta = Math.max(-1, Math.min(1, (event.wheelDelta || -event.detail)));
        if (delta > 0) {
            this.mouseWheelUp.emit(event);
        }
        else if (delta < 0) {
            this.mouseWheelDown.emit(event);
        }
        // for IE
        event.returnValue = false;
        // for Chrome and Firefox
        if (event.preventDefault) {
            event.preventDefault();
        }
    }
}
MouseWheelDirective.ɵfac = function MouseWheelDirective_Factory(t) { return new (t || MouseWheelDirective)(); };
MouseWheelDirective.ɵdir = /*@__PURE__*/ i0.ɵɵdefineDirective({ type: MouseWheelDirective, selectors: [["", "mouseWheel", ""]], hostBindings: function MouseWheelDirective_HostBindings(rf, ctx) { if (rf & 1) {
        i0.ɵɵlistener("mousewheel", function MouseWheelDirective_mousewheel_HostBindingHandler($event) { return ctx.onMouseWheelChrome($event); })("DOMMouseScroll", function MouseWheelDirective_DOMMouseScroll_HostBindingHandler($event) { return ctx.onMouseWheelFirefox($event); })("onmousewheel", function MouseWheelDirective_onmousewheel_HostBindingHandler($event) { return ctx.onMouseWheelIE($event); });
    } }, outputs: { mouseWheelUp: "mouseWheelUp", mouseWheelDown: "mouseWheelDown" } });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(MouseWheelDirective, [{
        type: Directive,
        args: [{ selector: '[mouseWheel]' }]
    }], null, { mouseWheelUp: [{
            type: Output
        }], mouseWheelDown: [{
            type: Output
        }], onMouseWheelChrome: [{
            type: HostListener,
            args: ['mousewheel', ['$event']]
        }], onMouseWheelFirefox: [{
            type: HostListener,
            args: ['DOMMouseScroll', ['$event']]
        }], onMouseWheelIE: [{
            type: HostListener,
            args: ['onmousewheel', ['$event']]
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW91c2V3aGVlbC5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvcHJvamVjdHMvbmd4LWltYWdlLWdhbGxlcnkvc3JjL2xpYi9kaXJlY3RpdmVzL21vdXNld2hlZWwuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLFlBQVksRUFBRSxZQUFZLEVBQUUsTUFBTSxlQUFlLENBQUM7O0FBRzlFLE1BQU0sT0FBTyxtQkFBbUI7SUFEaEM7UUFFWSxpQkFBWSxHQUFHLElBQUksWUFBWSxFQUFFLENBQUM7UUFDbEMsbUJBQWMsR0FBRyxJQUFJLFlBQVksRUFBRSxDQUFDO0tBNkIvQztJQTNCeUMsa0JBQWtCLENBQUMsS0FBVTtRQUNuRSxJQUFJLENBQUMsY0FBYyxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQzdCLENBQUM7SUFFMkMsbUJBQW1CLENBQUMsS0FBVTtRQUN4RSxJQUFJLENBQUMsY0FBYyxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQzdCLENBQUM7SUFFeUMsY0FBYyxDQUFDLEtBQVU7UUFDakUsSUFBSSxDQUFDLGNBQWMsQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUM3QixDQUFDO0lBRUQsY0FBYyxDQUFDLEtBQVU7UUFDdkIsSUFBSSxLQUFLLEdBQUcsTUFBTSxDQUFDLEtBQUssSUFBSSxLQUFLLENBQUMsQ0FBQyxpQkFBaUI7UUFDcEQsSUFBSSxLQUFLLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQyxVQUFVLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQzNFLElBQUcsS0FBSyxHQUFHLENBQUMsRUFBRTtZQUNWLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1NBQ2pDO2FBQU0sSUFBRyxLQUFLLEdBQUcsQ0FBQyxFQUFFO1lBQ2pCLElBQUksQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1NBQ25DO1FBQ0QsU0FBUztRQUNULEtBQUssQ0FBQyxXQUFXLEdBQUcsS0FBSyxDQUFDO1FBQzFCLHlCQUF5QjtRQUN6QixJQUFHLEtBQUssQ0FBQyxjQUFjLEVBQUU7WUFDckIsS0FBSyxDQUFDLGNBQWMsRUFBRSxDQUFDO1NBQzFCO0lBQ0gsQ0FBQzs7c0ZBOUJVLG1CQUFtQjtzRUFBbkIsbUJBQW1CO2dIQUFuQiw4QkFDVix1R0FEVSwrQkFDVCxtR0FEUywwQkFBc0I7O3VGQUF0QixtQkFBbUI7Y0FEL0IsU0FBUztlQUFDLEVBQUUsUUFBUSxFQUFFLGNBQWMsRUFBRTtnQkFFM0IsWUFBWTtrQkFBckIsTUFBTTtZQUNHLGNBQWM7a0JBQXZCLE1BQU07WUFFaUMsa0JBQWtCO2tCQUF6RCxZQUFZO21CQUFDLFlBQVksRUFBRSxDQUFDLFFBQVEsQ0FBQztZQUlNLG1CQUFtQjtrQkFBOUQsWUFBWTttQkFBQyxnQkFBZ0IsRUFBRSxDQUFDLFFBQVEsQ0FBQztZQUlBLGNBQWM7a0JBQXZELFlBQVk7bUJBQUMsY0FBYyxFQUFFLENBQUMsUUFBUSxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGlyZWN0aXZlLCBPdXRwdXQsIEhvc3RMaXN0ZW5lciwgRXZlbnRFbWl0dGVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5ARGlyZWN0aXZlKHsgc2VsZWN0b3I6ICdbbW91c2VXaGVlbF0nIH0pXHJcbmV4cG9ydCBjbGFzcyBNb3VzZVdoZWVsRGlyZWN0aXZlIHtcclxuICBAT3V0cHV0KCkgbW91c2VXaGVlbFVwID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG4gIEBPdXRwdXQoKSBtb3VzZVdoZWVsRG93biA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuXHJcbiAgQEhvc3RMaXN0ZW5lcignbW91c2V3aGVlbCcsIFsnJGV2ZW50J10pIG9uTW91c2VXaGVlbENocm9tZShldmVudDogYW55KSB7XHJcbiAgICB0aGlzLm1vdXNlV2hlZWxGdW5jKGV2ZW50KTtcclxuICB9XHJcblxyXG4gIEBIb3N0TGlzdGVuZXIoJ0RPTU1vdXNlU2Nyb2xsJywgWyckZXZlbnQnXSkgb25Nb3VzZVdoZWVsRmlyZWZveChldmVudDogYW55KSB7XHJcbiAgICB0aGlzLm1vdXNlV2hlZWxGdW5jKGV2ZW50KTtcclxuICB9XHJcblxyXG4gIEBIb3N0TGlzdGVuZXIoJ29ubW91c2V3aGVlbCcsIFsnJGV2ZW50J10pIG9uTW91c2VXaGVlbElFKGV2ZW50OiBhbnkpIHtcclxuICAgIHRoaXMubW91c2VXaGVlbEZ1bmMoZXZlbnQpO1xyXG4gIH1cclxuXHJcbiAgbW91c2VXaGVlbEZ1bmMoZXZlbnQ6IGFueSkge1xyXG4gICAgdmFyIGV2ZW50ID0gd2luZG93LmV2ZW50IHx8IGV2ZW50OyAvLyBvbGQgSUUgc3VwcG9ydFxyXG4gICAgdmFyIGRlbHRhID0gTWF0aC5tYXgoLTEsIE1hdGgubWluKDEsIChldmVudC53aGVlbERlbHRhIHx8IC1ldmVudC5kZXRhaWwpKSk7XHJcbiAgICBpZihkZWx0YSA+IDApIHtcclxuICAgICAgICB0aGlzLm1vdXNlV2hlZWxVcC5lbWl0KGV2ZW50KTtcclxuICAgIH0gZWxzZSBpZihkZWx0YSA8IDApIHtcclxuICAgICAgICB0aGlzLm1vdXNlV2hlZWxEb3duLmVtaXQoZXZlbnQpO1xyXG4gICAgfVxyXG4gICAgLy8gZm9yIElFXHJcbiAgICBldmVudC5yZXR1cm5WYWx1ZSA9IGZhbHNlO1xyXG4gICAgLy8gZm9yIENocm9tZSBhbmQgRmlyZWZveFxyXG4gICAgaWYoZXZlbnQucHJldmVudERlZmF1bHQpIHtcclxuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgfVxyXG4gIH1cclxufSJdfQ==
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxImageGalleryComponent } from './components/ngx-image-gallery/ngx-image-gallery.component';
import { ClickOutsideDirective } from './directives/click-outside.directive';
import { MouseWheelDirective } from './directives/mousewheel.directive';
import * as i0 from "@angular/core";
export * from './components/ngx-image-gallery/ngx-image-gallery.component';
export * from './directives/click-outside.directive';
export * from './directives/mousewheel.directive';
export * from './ngx-image-gallery.conf';
export class NgxImageGalleryModule {
}
NgxImageGalleryModule.ɵfac = function NgxImageGalleryModule_Factory(t) { return new (t || NgxImageGalleryModule)(); };
NgxImageGalleryModule.ɵmod = /*@__PURE__*/ i0.ɵɵdefineNgModule({ type: NgxImageGalleryModule });
NgxImageGalleryModule.ɵinj = /*@__PURE__*/ i0.ɵɵdefineInjector({ imports: [[
            CommonModule
        ]] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(NgxImageGalleryModule, [{
        type: NgModule,
        args: [{
                imports: [
                    CommonModule
                ],
                declarations: [
                    NgxImageGalleryComponent,
                    MouseWheelDirective,
                    ClickOutsideDirective
                ],
                exports: [
                    NgxImageGalleryComponent,
                    MouseWheelDirective,
                    ClickOutsideDirective
                ]
            }]
    }], null, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(NgxImageGalleryModule, { declarations: [NgxImageGalleryComponent,
        MouseWheelDirective,
        ClickOutsideDirective], imports: [CommonModule], exports: [NgxImageGalleryComponent,
        MouseWheelDirective,
        ClickOutsideDirective] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvcHJvamVjdHMvbmd4LWltYWdlLWdhbGxlcnkvc3JjL2xpYi9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUMsUUFBUSxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQ3ZDLE9BQU8sRUFBQyxZQUFZLEVBQUMsTUFBTSxpQkFBaUIsQ0FBQztBQUU3QyxPQUFPLEVBQUMsd0JBQXdCLEVBQUMsTUFBTSw0REFBNEQsQ0FBQztBQUNwRyxPQUFPLEVBQUMscUJBQXFCLEVBQUMsTUFBTSxzQ0FBc0MsQ0FBQztBQUMzRSxPQUFPLEVBQUMsbUJBQW1CLEVBQUMsTUFBTSxtQ0FBbUMsQ0FBQzs7QUFFdEUsY0FBYyw0REFBNEQsQ0FBQztBQUMzRSxjQUFjLHNDQUFzQyxDQUFDO0FBQ3JELGNBQWMsbUNBQW1DLENBQUM7QUFDbEQsY0FBYywwQkFBMEIsQ0FBQztBQWlCekMsTUFBTSxPQUFPLHFCQUFxQjs7MEZBQXJCLHFCQUFxQjt1RUFBckIscUJBQXFCOzJFQWRyQjtZQUNMLFlBQVk7U0FDZjt1RkFZUSxxQkFBcUI7Y0FmakMsUUFBUTtlQUFDO2dCQUNOLE9BQU8sRUFBRTtvQkFDTCxZQUFZO2lCQUNmO2dCQUNELFlBQVksRUFBRTtvQkFDVix3QkFBd0I7b0JBQ3hCLG1CQUFtQjtvQkFDbkIscUJBQXFCO2lCQUN4QjtnQkFDRCxPQUFPLEVBQUU7b0JBQ0wsd0JBQXdCO29CQUN4QixtQkFBbUI7b0JBQ25CLHFCQUFxQjtpQkFDeEI7YUFDSjs7d0ZBQ1kscUJBQXFCLG1CQVYxQix3QkFBd0I7UUFDeEIsbUJBQW1CO1FBQ25CLHFCQUFxQixhQUxyQixZQUFZLGFBUVosd0JBQXdCO1FBQ3hCLG1CQUFtQjtRQUNuQixxQkFBcUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge05nTW9kdWxlfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHtDb21tb25Nb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XHJcblxyXG5pbXBvcnQge05neEltYWdlR2FsbGVyeUNvbXBvbmVudH0gZnJvbSAnLi9jb21wb25lbnRzL25neC1pbWFnZS1nYWxsZXJ5L25neC1pbWFnZS1nYWxsZXJ5LmNvbXBvbmVudCc7XHJcbmltcG9ydCB7Q2xpY2tPdXRzaWRlRGlyZWN0aXZlfSBmcm9tICcuL2RpcmVjdGl2ZXMvY2xpY2stb3V0c2lkZS5kaXJlY3RpdmUnO1xyXG5pbXBvcnQge01vdXNlV2hlZWxEaXJlY3RpdmV9IGZyb20gJy4vZGlyZWN0aXZlcy9tb3VzZXdoZWVsLmRpcmVjdGl2ZSc7XHJcblxyXG5leHBvcnQgKiBmcm9tICcuL2NvbXBvbmVudHMvbmd4LWltYWdlLWdhbGxlcnkvbmd4LWltYWdlLWdhbGxlcnkuY29tcG9uZW50JztcclxuZXhwb3J0ICogZnJvbSAnLi9kaXJlY3RpdmVzL2NsaWNrLW91dHNpZGUuZGlyZWN0aXZlJztcclxuZXhwb3J0ICogZnJvbSAnLi9kaXJlY3RpdmVzL21vdXNld2hlZWwuZGlyZWN0aXZlJztcclxuZXhwb3J0ICogZnJvbSAnLi9uZ3gtaW1hZ2UtZ2FsbGVyeS5jb25mJztcclxuXHJcbkBOZ01vZHVsZSh7XHJcbiAgICBpbXBvcnRzOiBbXHJcbiAgICAgICAgQ29tbW9uTW9kdWxlXHJcbiAgICBdLFxyXG4gICAgZGVjbGFyYXRpb25zOiBbXHJcbiAgICAgICAgTmd4SW1hZ2VHYWxsZXJ5Q29tcG9uZW50LFxyXG4gICAgICAgIE1vdXNlV2hlZWxEaXJlY3RpdmUsXHJcbiAgICAgICAgQ2xpY2tPdXRzaWRlRGlyZWN0aXZlXHJcbiAgICBdLFxyXG4gICAgZXhwb3J0czogW1xyXG4gICAgICAgIE5neEltYWdlR2FsbGVyeUNvbXBvbmVudCxcclxuICAgICAgICBNb3VzZVdoZWVsRGlyZWN0aXZlLFxyXG4gICAgICAgIENsaWNrT3V0c2lkZURpcmVjdGl2ZVxyXG4gICAgXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgTmd4SW1hZ2VHYWxsZXJ5TW9kdWxlIHtcclxufVxyXG4iXX0=
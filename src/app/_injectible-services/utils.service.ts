import { DOCUMENT } from '@angular/common';
import { Inject, Injectable } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { environment } from 'src/environments/environment';

@Injectable({
    providedIn: 'root'
})
export class UtilsService {

    constructor(
        private title: Title,
        private meta: Meta,
        @Inject(DOCUMENT) private dom: any
    ) { }

    changeTitle(titleValue: string) {
        this.title.setTitle(`${titleValue} | ${environment.siteName}`)
    }

    addMetaTag(key: string, value: string) {
        this.meta.removeTag(`name='${key}'`);
        this.meta.addTag({ name: key, content: value, property: key })
    }

    addCanonicalLink() {
        const prevCanonical = this.dom.querySelector('[rel="canonical"]');
        if (prevCanonical) {
            prevCanonical.remove();
        }
        let link: HTMLLinkElement = this.dom.createElement('link');
        link.setAttribute('rel', 'canonical');
        this.dom.head.appendChild(link);
        link.setAttribute('href', this.dom.URL);
    }
}

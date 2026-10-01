import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss'
})
export class AppComponent {
    readonly skills = [
        'Angular',
        'React',
        'Node.js',
        'TypeScript',
        'JavaScript',
        'MongoDB',
        'Mongoose',
        'SCSS',
        'REST APIs',
        'Git',
        'AI-assisted development'
    ];

    readonly projects = [
        {
            title: 'StoreLink',
            description: 'Enterprise retail tooling for store setup, signage workflows, reporting and operational experiences.',
            tags: ['Angular', 'TypeScript', 'SCSS', 'REST APIs']
        },
        {
            title: 'Signage Reports',
            description: 'Reporting experience for pre-sweep and post-sweep signage performance, including downloadable reports.',
            tags: ['Angular', 'Reporting', 'UX', 'API Integration']
        },
        {
            title: 'Node.js + MongoDB Backend',
            description: 'Backend services using Node.js, Express-style APIs, MongoDB and Mongoose with validation and authentication patterns.',
            tags: ['Node.js', 'MongoDB', 'Mongoose', 'REST API']
        }
    ];

    scrollTo(id: string): void {
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    }
}

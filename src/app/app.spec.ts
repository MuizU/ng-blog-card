import { TestBed } from '@angular/core/testing';
import { App } from './app';
import { By } from '@angular/platform-browser';
import { provideRouter } from '@angular/router';
import { provideIcons } from '@ng-icons/core';
import { heroArrowRight } from '@ng-icons/heroicons/outline';

describe('App', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [App],
      providers: [provideRouter([]), provideIcons({ heroArrowRight })],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(App);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it('should show the correct title text in the card', () => {
    const fixture = TestBed.createComponent(App);
    fixture.detectChanges();
    const title = fixture.debugElement.query(By.css('h3.title'))?.nativeElement as HTMLElement;
    expect(title).toBeTruthy();
    expect(title.textContent?.trim()).toBe('Top 5 Living Room Inspirations');
  });

  it('should show the category pill', () => {
    const fixture = TestBed.createComponent(App);
    fixture.detectChanges();
    const category = fixture.debugElement.query(By.css('.category-pill'))?.nativeElement as HTMLElement;
    expect(category).toBeTruthy();
    expect(category.textContent?.trim()).toBe('Interior');
  });

  it('should render the hero image from assets', () => {
    const fixture = TestBed.createComponent(App);
    fixture.detectChanges();
    const img = fixture.debugElement.query(By.css('img.cover-img'))
      ?.nativeElement as HTMLImageElement;
    expect(img).toBeTruthy();
    expect(img.src).toContain('/assets/');
    expect(img.src).toMatch(/spacejoy-YqFz7UMm8qE-unsplash\.jpg$/);
    expect(img.alt).toBe('title-img');
  });

  it('should render CTA button with icon and label', () => {
    const fixture = TestBed.createComponent(App);
    fixture.detectChanges();
    const btn = fixture.debugElement.query(By.css('button.redirect-btn'))
      ?.nativeElement as HTMLButtonElement;
    expect(btn).toBeTruthy();
    expect(btn.textContent?.trim()).toContain('Read More');

    const icon = fixture.debugElement.query(By.css('button.redirect-btn ng-icon'));
    expect(icon).withContext('ng-icon should be present inside the CTA').not.toBeNull();
  });

  it('CTA should be focusable (basic a11y sanity)', () => {
    const fixture = TestBed.createComponent(App);
    fixture.detectChanges();
    const btn = fixture.debugElement.query(By.css('button.redirect-btn'))
      ?.nativeElement as HTMLButtonElement;
    expect(btn.tabIndex).not.toBe(-1);
    expect((btn.textContent || '').trim()).toContain('Read More');
  });
});

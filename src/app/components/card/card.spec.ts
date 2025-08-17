import { TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { provideIcons } from '@ng-icons/core';
import { heroArrowRight } from '@ng-icons/heroicons/outline';

import { Card } from './card';

describe('Card component', () => {
  beforeEach(async () => {
    TestBed.configureTestingModule({
      imports: [Card],
      providers: [provideIcons({ heroArrowRight })],
    });
  });

  it('should create', () => {
    const fixture = TestBed.createComponent(Card);
    const comp = fixture.componentInstance;
    expect(comp).toBeTruthy();
  });

  it('renders the hero image with correct alt and filename', () => {
    const fixture = TestBed.createComponent(Card);
    fixture.detectChanges();

    const img = fixture.debugElement.query(By.css('img.cover-img'))
      ?.nativeElement as HTMLImageElement;
    expect(img).toBeTruthy();
    expect(img.alt).toBe('title-img');

    expect(img.src).toContain('/assets/');
    expect(img.src).toMatch(/spacejoy-YqFz7UMm8qE-unsplash\.jpg$/);
  });

  it('shows category pill and title text', () => {
    const fixture = TestBed.createComponent(Card);
    fixture.detectChanges();

    const category = fixture.debugElement.query(By.css('.category-pill'))?.nativeElement as HTMLElement;
    const title = fixture.debugElement.query(By.css('h3.title'))?.nativeElement as HTMLElement;

    expect(category?.textContent?.trim()).toBe('Interior');
    expect(title?.textContent?.trim()).toBe('Top 5 Living Room Inspirations');
  });

  it('renders description copy', () => {
    const fixture = TestBed.createComponent(Card);
    fixture.detectChanges();

    const desc = fixture.debugElement.query(By.css('.description'))?.nativeElement as HTMLElement;
    expect(desc).toBeTruthy();
    expect(desc.textContent?.toLowerCase()).toContain('vibrant');
  });

  it('renders CTA with icon and label', () => {
    const fixture = TestBed.createComponent(Card);
    fixture.detectChanges();

    const btn = fixture.debugElement.query(By.css('button.redirect-btn'))
      ?.nativeElement as HTMLButtonElement;
    expect(btn).toBeTruthy();
    expect((btn.textContent || '').trim()).toContain('Read More');

    const icon = fixture.debugElement.query(By.css('button.redirect-btn ng-icon'));
    expect(icon).withContext('ng-icon should appear inside the CTA').not.toBeNull();
  });

  it('CTA is focusable and keyboard-accessible', () => {
    const fixture = TestBed.createComponent(Card);
    fixture.detectChanges();

    const btn = fixture.debugElement.query(By.css('button.redirect-btn'))
      ?.nativeElement as HTMLButtonElement;
    expect(btn.tabIndex).not.toBe(-1);

    btn.focus();
    expect(document.activeElement).toBe(btn);
  });
});

# CSS Architecture Documentation - Beyes Website

## 🏗️ Modular CSS Architecture

Bu proje modern, ölçeklenebilir ve sürdürülebilir bir CSS mimarisi kullanmaktadır.

## 📁 Klasör Yapısı

```
src/styles/
├── base/                    # Temel stiller
│   ├── variables.css        # CSS Custom Properties (Design Tokens)
│   ├── reset.css           # Modern CSS Reset
│   └── typography.css      # Typography sistem
├── layout/                 # Layout sistemleri
│   └── layout.css         # Grid, Flexbox, Container sistemleri
├── utils/                  # Utility sınıfları
│   └── utilities.css      # Atomic CSS sınıfları
├── components/             # Component stilleri
│   ├── ui/                # Temel UI component'leri
│   │   ├── button.css     # Button component'i
│   │   └── card.css       # Card component'i
│   ├── Common/            # Ortak component'ler
│   │   ├── header.css     # Header component'i
│   │   └── footer.css     # Footer component'i
│   └── Home/              # Ana sayfa component'leri
│       ├── heroSection.css
│       ├── aboutSection.css
│       └── ...
├── pages/                  # Sayfa-specific stiller
│   ├── About/
│   ├── Products/
│   └── ...
├── themes/                 # Tema dosyaları
└── index.css              # Ana CSS dosyası (tüm import'lar)
```

## 🎨 Design System

### CSS Custom Properties (Variables)

Tüm tasarım token'ları `base/variables.css` dosyasında tanımlanmıştır:

- **Renkler**: Primary, secondary, neutral, status renkleri
- **Tipografi**: Font aileleri, boyutları, kalınlıkları
- **Spacing**: Tutarlı boşluk sistemi
- **Borders**: Border radius, kalınlık değerleri
- **Shadows**: Gölge sistemleri
- **Transitions**: Geçiş efektleri

### Renk Paleti

```css
--color-primary: #d32f2f;        /* Ana marka rengi */
--color-primary-light: #f44336;  /* Açık varyant */
--color-primary-dark: #c62828;   /* Koyu varyant */
```

### Typography Scale

```css
--font-size-xs: 0.75rem;    /* 12px */
--font-size-sm: 0.875rem;   /* 14px */
--font-size-base: 1rem;     /* 16px */
--font-size-lg: 1.125rem;   /* 18px */
--font-size-xl: 1.25rem;    /* 20px */
```

### Spacing System

8px tabanlı spacing sistemi:

```css
--space-1: 0.25rem;   /* 4px */
--space-2: 0.5rem;    /* 8px */
--space-4: 1rem;      /* 16px */
--space-8: 2rem;      /* 32px */
```

## 🏷️ Naming Convention

### BEM Methodology

```css
/* Block */
.component-name { }

/* Element */
.component-name__element { }

/* Modifier */
.component-name--modifier { }
```

### Utility Classes

```css
/* Layout */
.flex, .grid, .container

/* Spacing */
.mt-4, .px-6, .mb-8

/* Typography */
.text-lg, .font-bold, .text-center

/* Colors */
.text-primary, .bg-white, .border-gray-200
```

## 📱 Responsive Design

### Mobile-First Approach

```css
/* Mobil (varsayılan) */
.component { }

/* Tablet ve üzeri */
@media (min-width: 768px) {
  .md\:grid-cols-2 { }
}

/* Desktop ve üzeri */
@media (min-width: 1024px) {
  .lg\:grid-cols-3 { }
}
```

### Breakpoints

```css
--breakpoint-sm: 640px;   /* Küçük tablet */
--breakpoint-md: 768px;   /* Tablet */
--breakpoint-lg: 1024px;  /* Küçük desktop */
--breakpoint-xl: 1280px;  /* Desktop */
--breakpoint-2xl: 1536px; /* Büyük desktop */
```

## 🎯 Component Patterns

### Button Component

```html
<button class="btn btn--primary btn--lg">
  <span class="btn__icon">🚀</span>
  Action Button
</button>
```

```css
.btn { /* Base styles */ }
.btn--primary { /* Primary variant */ }
.btn--lg { /* Large size */ }
.btn__icon { /* Icon element */ }
```

### Card Component

```html
<div class="card card--elevated">
  <div class="card__header">
    <h3 class="card__title">Card Title</h3>
  </div>
  <div class="card__body">
    <p class="card__text">Card content</p>
  </div>
  <div class="card__footer">
    <div class="card__actions">
      <button class="btn btn--primary">Action</button>
    </div>
  </div>
</div>
```

## 🚀 Kullanım Rehberi

### 1. Yeni Component Ekleme

1. `components/` klasöründe uygun alt klasöre component CSS dosyası oluşturun
2. BEM metodolojisini kullanarak sınıf adlarını belirleyin
3. CSS variables kullanarak tasarım token'larını uygulayın
4. `index.css` dosyasına import ekleyin

### 2. Utility Classes Kullanımı

```html
<!-- Spacing -->
<div class="mt-8 mb-4 px-6">Content</div>

<!-- Layout -->
<div class="flex items-center justify-between">Content</div>

<!-- Typography -->
<h2 class="text-2xl font-bold text-primary">Heading</h2>
```

### 3. Custom Properties Kullanımı

```css
.custom-component {
  color: var(--color-primary);
  padding: var(--space-4);
  border-radius: var(--border-radius-lg);
  transition: var(--transition-all);
}
```

## 🔧 Geliştirme Notları

### CSS Import Sırası

1. **Base Layer**: Variables, reset, typography
2. **Layout Layer**: Grid, flexbox sistemleri
3. **Utility Layer**: Atomic sınıflar
4. **Component Layer**: UI component'leri
5. **Page Layer**: Sayfa-specific stiller
6. **Theme Layer**: Tema override'ları

### Performance İpuçları

- CSS variables kullanarak runtime değişiklikler yapın
- Critical CSS extraction için component'leri ayrı dosyalarda tutun
- Unused CSS'i temizlemek için PurgeCSS kullanın
- Utility-first yaklaşımı benimseyin

### Accessibility

- `prefers-reduced-motion` için gerekli ayarlamalar yapılmıştır
- Focus-visible destek eklenmiştir
- Color contrast ratios kontrol edilmiştir

## 📊 Avantajlar

### Eski Sistem vs Yeni Sistem

| Özellik | Eski Sistem | Yeni Sistem |
|---------|-------------|-------------|
| **Maintainability** | ❌ Düşük | ✅ Yüksek |
| **Scalability** | ❌ Zor | ✅ Kolay |
| **Consistency** | ❌ Tutarsız | ✅ Tutarlı |
| **Reusability** | ❌ Düşük | ✅ Yüksek |
| **Performance** | ❌ Karışık | ✅ Optimize |
| **Developer Experience** | ❌ Kötü | ✅ Mükemmel |

### Faydalar

1. **Modular Yapı**: Her component kendi CSS dosyasına sahip
2. **Design System**: Tutarlı tasarım token'ları
3. **Utility Classes**: Hızlı prototyping ve geliştirme
4. **Responsive**: Mobile-first approach
5. **Accessible**: WCAG uyumlu
6. **Maintainable**: Kolay güncelleme ve değişiklik

Bu yeni CSS mimarisi sayesinde:
- Daha hızlı geliştirme
- Daha az kod tekrarı
- Daha tutarlı tasarım
- Daha kolay bakım
- Daha iyi performans

elde edeceksiniz.

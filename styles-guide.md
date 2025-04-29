## Branding Theme:
    Earthy materials + Futuristic tech
    Natural textures (stone, metals, minerals) combined with clean futuristic minimalism.

### Color Palette

    Role | Color | HEX | Tailwind Class
Primary | Rich Earth Brown | #FAFAFA | bg-[#4B3A2D]
Secondary | Soft Sand | #66A182 | bg-[#D7C4A3]
Accent (Highlight) | Electric Teal | #D9BF77 | bg-[#00FFD1]
Background | Dark Slate | #1F2937 | bg-[#1F2937]


### Typography

Role | Font | Usage
Headings (h1, h2, h3) | Space Grotesk | Futuristic, bold, clean
Body Text | Inter | Readable, neutral, elegant
Logo Typeface | Space Grotesk Bold or Poppins ExtraBold | Sharp, techy feeling

### Font Sizes Example:

- h1: text-4xl md:text-6xl

- h2: text-3xl md:text-5xl

- h3: text-2xl

- Body: text-base md:text-lg

### Font Weights:

- Heading: font-bold

- Body: font-normal or font-light

## Button Styles

Button Type | Background | Text Color | Hover
Primary Button | Primary Color (#4B3A2D) | Light Text (#F9FAFB) | Darker brown shade
Secondary Button | Secondary Color (#D7C4A3) | Dark Text (#1F2937) | Slightly darker sand
Accent Button | Accent Color (#00FFD1) | Dark Text (#1F2937) | Brighter teal or slight glow


### Border Radius:

- rounded-lg (for soft futuristic feel)

## Shadows
Use soft glows instead of heavy shadows for the futuristic vibe:

```css
shadow-[0_4px_30px_rgba(0,255,209,0.2)]
```
or use Tailwind shadow-lg with custom color tint.



## Special Effects

- Hover effects: Slight glow (hover:shadow-[0_0_10px_#00FFD1]).

- Active States: Slight inset shadows to simulate "pressed" effect.

- Transitions: Smooth (transition-all duration-300 ease-in-out).
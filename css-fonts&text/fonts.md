# CSS Fonts
Fonts play a crucial role in making your page visually appealing. Fonts decide how texts will look on the screen; depending on the website, different kinds of fonts are used.

Let’s look at the major font attributes.

## Font Color
Font color defines the colour of the text or typography.
## Font size
The font size property sets the size of the fonts.

It has some predefined sizes, such as small, medium, large, larger, etc.
**syntax**- 
selector{
    font-size: 20px;
}

## CSS Font Style
The font style property sets the style of the font.

There are three types of font styles: italic, normal, and oblique.

Quick notes:

italic: Italic texts are slightly to the right.
normal: Default text style.
Oblique: Oblique is similar to italic but has less bend

**syntax:**
 #p1 {
            font-style: italic;
        }

## CSS Font Weight
The font-weight property controls the thickness or boldness of the text.

The values range from 100 (thin) to 900 (ultra-bold) and also have some predefined values such as lighter, bold, and bolder

**syntax**:
#p1 {
            font-weight: 100;
        }
#p2 {
            font-weight: bold;
        }
## Font Family 
The font family property specifies the font stack. This is used to set the preferred font for the text content.

We can define multiple font family names separated by commas based on priority.

**syntax**:
selector{
      font-family: font1, font2, font3;
}
## Generic Font family

There are five generic font family names that serve as fallback options when specific fonts are not available:

serif: generic serif fonts (like Times New Roman).
sans-serif: generic sans-serif fonts (like Arial or Helvetica).
monospace: generic monospaced fonts (like Courier New).
cursive: generic cursive fonts (for handwritten styles).
fantasy: generic fantasy fonts (for decorative styles).

Tip: It is recommended to end the font family with any of these generic font family names.

Custom fonts
We can also use custom fonts for our websites; here, we will be using Google Fonts.

Follow the steps:

Go to https://fonts.google.com/
Select your preferred font.
Choose the fonts based on font weight.
Copy the import link and paste it on the top of the stylesheet.
Copy the font family and paste it wherever you want to use it.


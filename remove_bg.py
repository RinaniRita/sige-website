from PIL import Image

def remove_white_bg(input_path, output_path):
    img = Image.open(input_path).convert("RGBA")
    data = img.getdata()
    
    new_data = []
    # threshold for considering a pixel "white"
    threshold = 240
    
    for item in data:
        # Check if the pixel is white-ish
        if item[0] > threshold and item[1] > threshold and item[2] > threshold:
            new_data.append((255, 255, 255, 0)) # fully transparent
        else:
            new_data.append(item)
            
    img.putdata(new_data)
    img.save(output_path, "PNG")
    print(f"Saved {output_path}")

if __name__ == "__main__":
    remove_white_bg("/Volumes/external/Projects 2/v0-SIGE/public/logo-sige-blue.jpg", "/Volumes/external/Projects 2/v0-SIGE/public/logo-sige-blue-transparent.png")

### Error: SVG data parsing failed cause...
If you get error "Error: SVG data parsing failed cause the document does not have a root node" 
on exec "npm run svg" make sure your svg have 'xmlns="http://www.w3.org/2000/svg"' property

### Compiled icon doesn't display
Check viewbox in source svg file, none of the values must be negative

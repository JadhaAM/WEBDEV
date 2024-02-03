<html>
<body>
<h3>Reading an XML File with the DOM Extension</h3>
<pre>
<?php
// Read the XML document into a DOMDocument object
$doc = new DOMDocument();
$doc->load("stock_list.xml");

// Call the traverseDocument function and pass the DOMDocument object
traverseDocument($doc);

// Function to traverse each node of the DOM document recursively
function traverseDocument($node) {
    switch ($node->nodeType) {
        case XML_ELEMENT_NODE:
            echo "Found element: \"$node->tagName\"";
            if ($node->hasAttributes()) {
                echo " with attributes: ";
                foreach ($node->attributes as $attribute) {
                    echo "$attribute->name=\"$attribute->value\" ";
                }
            }
            echo "\n";
            break;
            
        case XML_TEXT_NODE:
            if (trim($node->wholeText)) {
                echo "Found text node: \"$node->wholeText\"\n";
            }
            break;
            
        case XML_CDATA_SECTION_NODE:
            if (trim($node->data)) {
                echo "Found character data node: \"" . htmlspecialchars($node->data) . "\"\n";
            }
            break;
    }
    
    if ($node->hasChildNodes()) {
        foreach ($node->childNodes as $child) {
            traverseDocument($child);
        }
    }
}
?>
</pre>
</body>
</html>

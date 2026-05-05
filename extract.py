import zipfile
import os
import glob
import xml.etree.ElementTree as ET

def extract_docx(doc_path):
    print(f"\n--- Extracting {doc_path} ---")
    base_name = os.path.basename(doc_path).replace('.docx', '')
    output_dir = os.path.join('E:\\quanta\\src\\app\\events\\extracted', base_name)
    os.makedirs(output_dir, exist_ok=True)
    try:
        with zipfile.ZipFile(doc_path, 'r') as doc:
            for info in doc.infolist():
                if info.filename.startswith('word/media/'):
                    doc.extract(info.filename, output_dir)
                    print(f"Extracted image: {info.filename}")
                if info.filename == 'word/document.xml':
                    xml_content = doc.read(info.filename)
                    root = ET.fromstring(xml_content)
                    namespace = {'w': 'http://schemas.openxmlformats.org/wordprocessingml/2006/main'}
                    print("\nText content:")
                    for p in root.iterfind('.//w:p', namespace):
                        p_text = "".join([t.text for t in p.iterfind('.//w:t', namespace) if t.text])
                        if p_text:
                            print(p_text)
    except Exception as e:
        print(f"Failed to extract {doc_path}: {e}")


for file in glob.glob('E:\\quanta\\src\\app\\events\\event details past\\*.docx'):
    extract_docx(file)

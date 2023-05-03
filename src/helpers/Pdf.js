import { PDFDocument, StandardFonts, rgb } from 'pdf-lib';
import download from 'downloadjs';

export const createPdf = async ({ Cliente, user, Ruta, Productos, precioTotal, id }) => {
    const pdfDoc = await PDFDocument.create();
    const timesRomanFont = await pdfDoc.embedFont(StandardFonts.TimesRoman)

    const page = pdfDoc.addPage()
    const { width, height } = page.getSize()
    const fontSize = 18

    page.drawText('ASL!', {
        x: 110,
        y: height - 1.5 * 40,
        size: 40,
        font: timesRomanFont,
        color: rgb(0, 0.80, 0.5),
    })
    page.drawText('Reporte del asesor ' + user.name, {
        x: 50,
        y: height - 4 * 30,
        size: 22,
        font: timesRomanFont,
        color: rgb(0.20, 0.20, 0.20),
    })
    page.drawText('Cliente que realiza la compra : ' + Cliente, {
        x: 50,
        y: height - 9 * fontSize,
        size: fontSize,
        font: timesRomanFont,
        color: rgb(0.20, 0.20, 0.20),
    })
    page.drawText('Ruta del cliente : ' + Ruta, {
        x: 50,
        y: height - 11 * fontSize,
        size: fontSize,
        font: timesRomanFont,
        color: rgb(0.20, 0.20, 0.20),
    })

    page.drawText('Precio total del pedido : ' + precioTotal, {
        x: 50,
        y: height - 13 * fontSize,
        size: fontSize,
        font: timesRomanFont,
        color: rgb(0.20, 0.20, 0.20),
    })

    page.drawText('Firma cliente: ', {
        x: 50,
        y: height - 16 * fontSize,
        size: fontSize,
        font: timesRomanFont,
        color: rgb(0.20, 0.20, 0.20),
    })

    page.drawText('Productos', {
        x: 240,
        y: height - 19 * fontSize,
        size: 22,
        font: timesRomanFont,
        color: rgb(0.20, 0.20, 0.20),
    })


    Productos.map((prod, i) => {
        page.drawText(prod.nombre + ' (x' + prod.cantidad + ')' + 'Precio: ' + new Intl.NumberFormat('es-CO', { style: 'currency', currency: 'COL' }).format(prod.precio) + '    Ref: ' + prod.referencia, {
            x: 50,
            y: height - 380 - (i * 2) * fontSize,
            size: 16,
            font: timesRomanFont,
            color: rgb(0.20, 0.20, 0.20),
        })
    })

    var page2 = pdfDoc.addPage()

    page2.drawText('Imagenes de los productos', {
        x: 150,
        y: height - 1.5 * 40,
        size: 22,
        font: timesRomanFont,
        color: rgb(0.20, 0.20, 0.20),
    })

    const imagesBuffers = Productos.map(prod => prod.imagenURL)

    const images = await Promise.all(imagesBuffers.map(async (imageBuffer) => {
        var imageBytes, imageType;
      
        // Determina el tipo de imagen (JPG o PNG)
        if (imageBuffer.endsWith('.jpg') || imageBuffer.endsWith('.JPG')) {
          imageType = 'jpg';
        } else if (imageBuffer.endsWith('.png') || imageBuffer.endsWith('.PNG')) {
          imageType = 'png';
        } else {
          throw new Error(`Unsupported image format: ${imageBuffer}`);
        }
      
        // Obtiene los bytes de la imagen
        imageBytes = await fetch(imageBuffer).then((res) => res.arrayBuffer());
      
        // Devuelve la imagen incrustada en el documento PDF
        if (imageType === 'jpg') {
          return await pdfDoc.embedJpg(imageBytes);
        } else if (imageType === 'png') {
          return await pdfDoc.embedPng(imageBytes);
        }
      }));
    var imgAdd = 0;
    var heightPages = 841.89;
    images.map((image, i) => {
        const jpgDims = image.scale(0.2)

        imgAdd++;

        if (imgAdd % 4 === 0) {
            // Crear una nueva página si se han agregado el número especificado de imágenes por página.
            page2 = pdfDoc.addPage();
            heightPages = 1600;
        }

        page2.drawImage(image, {
            x: 170,
            y: heightPages - 340 - (i * 13) * fontSize,
            width: jpgDims.width,
            height: jpgDims.height,
        })
        
        
    });


    const pdfBytes = await pdfDoc.save()

    download(pdfBytes, "Pedido Nro: "+id+ " Cliente: " + Cliente, "application/pdf");

}
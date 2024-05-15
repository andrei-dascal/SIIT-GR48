import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    standalone: true,
    name: "defaultImage"
})
export class DefaultImagePipe implements PipeTransform {
    transform(imageURL: string, fallbackImageUrl: string) {
        if(imageURL !== '')
            return imageURL;

        if(fallbackImageUrl !== '')
            return fallbackImageUrl;

        return 'https://img.freepik.com/free-photo/painting-mountain-lake-with-mountain-background_188544-9126.jpg'
    }
}
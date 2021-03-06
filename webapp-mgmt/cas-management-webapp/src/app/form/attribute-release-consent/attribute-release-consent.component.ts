import { Component, OnInit } from '@angular/core';
import {Data} from "../data";
import {FormData } from "../../../domain/service-view-bean";
import {Messages} from "../../messages";
import {DefaultRegisteredServiceConsentPolicy} from "../../../domain/attribute-release";

@Component({
  selector: 'app-attribute-release-consent',
  templateUrl: './attribute-release-consent.component.html',
  styleUrls: ['./attribute-release-consent.component.css']
})
export class AttributeReleaseConsentComponent implements OnInit {
  formData: FormData;

  constructor(public messages: Messages,
              public data: Data) {
    this.formData = data.formData;
  }

  ngOnInit() {
  }


  isEmpty(data: any[]): boolean {
    return !data || data.length == 0;
  }
}

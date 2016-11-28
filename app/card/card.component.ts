import { Component, Input } from '@angular/core';

import { Task } from '../model/task';

@Component({
    moduleId: module.id,
    selector: 'app-card',
    //templateUrl: 'app/card/card.component.html',
    //styleUrls: [ 'app/card/card.component.css' ]

    templateUrl: 'card.component.html',
    styleUrls: [ 'card.component.css' ]
})
export class CardComponent{ 
    @Input() task: Task;

} 



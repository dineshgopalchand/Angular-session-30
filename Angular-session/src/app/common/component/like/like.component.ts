import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-like',
  templateUrl: './like.component.html',
  styleUrls: ['./like.component.scss']
})
export class LikeComponent implements OnInit {
  private _likeCount = 0;
  @Input() isLike?= false;
  @Input() set likeCount(value: (number | undefined)) {
    this._likeCount = value ? value : 0;
  };
  get likeCount() {
    return this._likeCount;
  }
  @Output() updateLike = new EventEmitter<LikeUpdate>();
  constructor() { }
  ngOnInit(): void {
  }
  updateStatus() {
    this.isLike = !this.isLike;
    if (this.isLike) {
      this._likeCount++;
    } else {
      this._likeCount--;
    }
    this.updateLike.emit({
      isLike: this.isLike,
      likeCount: this._likeCount
    })
  }
}

export interface LikeUpdate {
  isLike: boolean,
  likeCount: number
}


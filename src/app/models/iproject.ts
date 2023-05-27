export interface iProject {
  id:Number,
  title:String,
  details:String,
  category:String,
  picUrl:String[],
  tags:String[],
  donation:Number
  target:Number
  startDate:Date,
  endDate:Date,
  comments:String[],
  avgRating:Number
}

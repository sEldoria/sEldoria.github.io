/* ตั้งค่าเรทฐานสำหรับการสุ่มเกรด
   แต่ละเบราว์เซอร์และแต่ละวิชาจะได้รับการสุ่มปรับเรทเฉพาะตัวในครั้งแรก
   แล้วบันทึกไว้ใน localStorage เพื่อให้เปอร์เซ็นต์คงเดิมเมื่อกลับมาเปิดใหม่
   ค่า 0 คือไม่ให้เกรดนั้นออก
*/
window.GRADE_CONFIG = {
  /* ตั้งค่าเรทฐานสำหรับการสุ่มเกรด
   แต่ละเบราว์เซอร์และแต่ละวิชาจะได้รับการสุ่มปรับเรทเฉพาะตัวในครั้งแรก
   แล้วบันทึกไว้ใน localStorage เพื่อให้เปอร์เซ็นต์คงเดิมเมื่อกลับมาเปิดใหม่
   ค่า 0 คือไม่ให้เกรดนั้นออก
*/
window.GRADE_CONFIG = {
rates: {
    "F":  40,
    "D":  20,
    "D+": 14,
    "C":  10,
    "C+":  7,
    "B":   4,
    "B+":  3,
    "A":   2
  }
,

  // ชื่อที่แสดงใน dropdown วิชา (key ต้องตรงกับชื่อใน folders ของ index.html)
  subjectNames: {
    transport: "TRANSPORT PHENOMENA I",
    kinetic: "CHEMICAL KINETICS AND REACTOR DESIGN"
  },

  // กลุ่มเสียงหลังสุ่ม: good = เสียงยินดี, bad = เสียงผิดหวัง
  soundTiers: {
    good: ["A", "B+", "B"],
    bad: ["F", "D", "D+"]
  }
};
,

  // ชื่อที่แสดงใน dropdown วิชา (key ต้องตรงกับชื่อใน folders ของ index.html)
  subjectNames: {
    transport: "TRANSPORT PHENOMENA I",
    kinetic: "CHEMICAL KINETICS AND REACTOR DESIGN"
  },

  // กลุ่มเสียงหลังสุ่ม: good = เสียงยินดี, bad = เสียงผิดหวัง
  soundTiers: {
    good: ["A", "B+", "B"],
    bad: ["F", "D", "D+"]
  }
};

<template>
  <div>
    竖版 画布> 相机> 坐标 ->人物 > 中线

    <!--    画布-->
    <div style="border: #42b983 solid 1px;width: 300px;height:600px;float: left ;overflow: hidden">
      <!--      相机-->
      <div id="madiv" :style="mapdiv">
        <!--        滑道-->
        <div id="huadao" :style="huadaoh">
          <div id="me" :style="melocal">
            <!--                  人物-->
          </div>
        </div>
        <!--        人物-->
        <div  v-for="(role,i) of d.role" :key="i">

          <div v-if="role.pos ==0"
               class="role rolel"
               :style="{top: role.local*6+'px',height:role.lang*6+'px'}">
            <RoleView :role="role"></RoleView>
          </div>
          <div v-if="role.pos ==1"
               class="role roler"
               :style="{top: role.local*6+'px',height:role.lang*6+'px'}">
            <RoleView :role="role"></RoleView>
          </div>
        </div>
      </div>
    </div>
    <div style="float: right;width: 90px">
      控制面板<br>


      <button @click="shang(2)">↑</button>
      <button @click="xia(2)">↓</button>
      <br><br>
      <button @click="shang(10)">↑10</button>
      <button @click="xia(10)">↓10</button>

      <br><br>
      <button>←</button>
      <button>→</button>
    </div>
    <div style="width: 500px;float: left">
      <pre style="text-align: left">{{ status }}{{ top }}{{ d.size }}</pre>
      {{ steps }}
    </div>

  </div>
</template>

<script>
import map1 from "@/assets/map/1.json";
import RoleView from "@/components/RoleView";
export default {
  name: "Vertical",
  components:{
    RoleView
  },
  data() {
    return {
      d: map1,
      steps: 0,
      index: 0,
      status: {
        now: 20,
        center: 100
      },
      top: {
        mapdiv: 0,
        melocal: 0
      }
    }
  },
  computed: {

    mapdiv() {
      return {
        height: (this.d.size * 6+30) + 'px',
        top: this.top.mapdiv + 'px'
      }
    },
    huadaoh() {
      return {
        height:  (this.d.size * 6+30)  + 'px'
      }
    },
    melocal() {
      return {
        top: this.top.melocal + 'px'
      }
    }
  },
  methods: {
    roletop(role){
      console.log(role);
      return {
        top: role.local*6+'px'
      }
    },
    me() {
      return {
        top: '5px'
      }
    },
    shang(s) {
      this.status.now -= s;
      if (this.status.now < 0) {
        this.status.now = 0;
      }
    },
    xia(s) {
      this.status.now += s;
      if (this.status.now > this.d.size) {
        this.status.now = this.d.size;
      }
    },
    init() {
      if (this.index == 0) {
        this.index = setInterval(this.step, 1000)
      }
    },
    step() {
      this.steps++;
      // 计算我的位置
      let melocal = (this.status.now * 6 )+10;
      let a = this.status.now * 6;

      if (melocal > a - 10) {
        melocal -= 15;
      }
      this.top.melocal = melocal;
      if (this.top.melocal > 200) {

        a -= 200;
        // 内容高度
        let maxtop = (this.d.size * 6) - 600;
        if (a > maxtop) {
          a -= (a - maxtop-10);
        }
        this.top.mapdiv = -a;
      }else{
        this.top.mapdiv = 0;
      }

    }
  },
  mounted() {
    this.init();
  }
}
</script>

<style scoped>
#me {
  float: left;
  background-color: red;
  height: 15px;
  width: 15px;
  border-radius: 50%;
  position: relative;
  right: 2px;
}

#huadao {
  border: blue solid 1px;
  width: 50px;
  background-color: burlywood;
  position: relative;
  float: left;
  left: 120px;
}

button {
  min-width: 40px;
}

#madiv {
  position: relative;
  border: red solid 1px;
}
.role{
  position: absolute;
}
.rolel{
  right: 190px;
}
.roler{
  left: 190px;
}
</style>
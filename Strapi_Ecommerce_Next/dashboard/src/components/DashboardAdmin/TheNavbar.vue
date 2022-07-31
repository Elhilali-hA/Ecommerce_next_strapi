<template>
    <div id="wrapper">
        

        <!-- Sidebar -->
        <Sidebar />
        <!-- End of Sidebar -->

        <!-- Content Wrapper -->
        <div id="content-wrapper" class="d-flex flex-column">

            <!-- Main Content -->
            <div id="content">

                <!-- Topbar -->
                <TopBar />
                <!-- End of Topbar -->

                <!-- Begin Page Content -->
                <div class="container-fluid">

                    <!-- Page Heading -->
                    <div class="d-sm-flex align-items-center justify-content-between mb-4">
                        <h1 class="h3 mb-0 text-gray-800">Dashboard</h1>
                        <a href="#" class="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm"><i
                                class="fas fa-download fa-sm text-white-50"></i> Generate Report</a>
                    </div>

                    <!-- Content Row -->
                   <EarningCard />

                    <!-- Content Row -->

                    <div class="row">

                        <!-- Area Chart -->
                        <AreaChart />
                        <!-- Pie Chart -->
                        <PieChart />
                    </div>

                    <!-- Content Row -->
                    <Percentage />

                </div>
           

            </div>
            

            
            <Footer />
            

        </div>
        

    </div>

    
</template>

<script>
import Footer from './TheFooter.vue'
import PieChart from './PieChart.vue'
import AreaChart from './AreaChart.vue'
import EarningCard from './EarningCard.vue'
import Sidebar from './TheSideBar.vue'
import TopBar from './TheTopBar.vue'
import Percentage from './ThePercent.vue'

export default {
  components: {
   Footer,
   PieChart,
   AreaChart,
   EarningCard,
   Sidebar,
   TopBar,
   Percentage
  }
}
</script>

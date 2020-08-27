<template>
    <div>
        <kendo-scheduler :data-source="localDataSource"
                        :date="date"
                        :height="600"
                        :timezone="'Etc/UTC'"
                        :toolbar="['pdf']"
                        :selectable="true"
                        :pdf-file-name="'Kendo UI Scheduler Export.pdf'"
                        :startTime="startTime"
                        >
        <kendo-scheduler-view :type="'day'"></kendo-scheduler-view>
        <kendo-scheduler-view :type="'workWeek'" :selected="true"></kendo-scheduler-view>
        <kendo-scheduler-view :type="'week'"></kendo-scheduler-view>
        <kendo-scheduler-view :type="'month'"></kendo-scheduler-view>
        <kendo-scheduler-view :type="'agenda'"></kendo-scheduler-view>
        </kendo-scheduler>
    </div>
</template>

<script>
export default {
      name: 'Schedule',
      data() {
                return{ 
                    date: new Date('2018/6/6'),
                    startTime: new Date('2018/6/6 07:00 AM'),

        localDataSource: [
            {
              id: 1,
              start: new Date("2018/6/6 08:00 AM"),
              end: new Date("2018/6/6 09:00 AM"),
              title: "Interview"
            },
            {
              id: 2,
              start: new Date("2018/6/6 08:00 AM"),
              end: new Date("2018/6/6 09:00 AM"),
              title: "Meeting"
            }
        ]

                
                }
            },
}
</script>
using System;

namespace Helpdesk_Ticketing
{
    /// <summary>
    /// ?? => Not sure why this WeatherForcast class got created.  Happened when React was run on VS Studio.
    /// </summary>
    public class WeatherForecast
    {
        public DateTime Date { get; set; }

        public int TemperatureC { get; set; }

        public int TemperatureF => 32 + (int)(TemperatureC / 0.5556);

        public string Summary { get; set; }
    }
}
